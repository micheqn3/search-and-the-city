// Resolvers for type definitions

const { AuthenticationError } = require('apollo-server-express');
const { User, Itinerary  } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: { 
        // Retrieves a single user
        me: async (parent, args, context) => { 
            if (context.user) {
                return await User.findOne({_id: context.user._id}).populate('itineraries');
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // Retrieves one user's itineraries
        myItineraries: async (parent, args, context) => {
            if (context.user) {
                return await Itinerary.find({userID: context.user._id});
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    },
    Mutation: {
        // Login a user
        login: async (parent, {email, password}) => { 
            const user = await User.findOne({email});
            if (!user) {
                throw new AuthenticationError('No user found with this email!');
            }
            const correctPW = await user.isCorrectPassword(password);

            if (!correctPW) {
                throw new AuthenticationError('Incorrect credentials!');
            }

            const token = signToken(user);
            return { token, user };
        },

        // Add a user
        addUser: async (parent, {username, email, password}) => { 
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        // Add an itinerary
        addItinerary: async (parent, {name}, context) => {
            if (context.user) {
                const itinerary = await Itinerary.create({
                    name,
                    userID: context.user._id
                })
                
                await User.findOneAndUpdate(
                    {_id: context.user._id}, 
                    {$addToSet: {itineraries: itinerary._id }}
                )
                return itinerary;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // Removes itinerary and removes itinerary ID from the user
        removeItinerary: async (parent, {ID}, context) => {
            if (context.user) {
                const itinerary = await Itinerary.findOneAndDelete({
                    _id: ID
                })
                await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {itineraries: itinerary._id}}
                )
                return itinerary;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // Add saved restaurant/event to itinerary
        addSavedItems: async (parent, {yelpID, name, image, url, location, rating, categories, price, itinName }, context) => {
            if (context.user) {
                return await Itinerary.findOneAndUpdate(
                    {name: itinName}, 
                    {
                        $addToSet: {
                            savedItems: {
                                yelpID: yelpID,
                                name: name,
                                image: image, 
                                url: url,
                                location: location, 
                                rating: rating,
                                categories: categories,
                                price: price
                            }
                        }
                    },
                    {
                        new: true,
                        runValidators: true
                    }
                )
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers;