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
    }
}

module.exports = resolvers;