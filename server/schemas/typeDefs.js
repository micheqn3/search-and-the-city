// Import gql to provide type definitions

const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Define schema types
type User {
    _id: ID
    username: String!
    email: String!
    itineraries: [Itinerary]!
}

type Itinerary {
    _id: ID
    name: String!
    savedItems: [SavedItem]!
}

type SavedItem {
    _id: ID
    yelpID: String!
    name: String!
    image: String!
    url: String!
    location: String!
    rating: Float!
    categories: [String]!
    price: String
}

type Auth {
    token: ID
    user: User
}

# Define query types 
type Query {
    me: User
    myItineraries: [Itinerary]
    itinerary(ID: ID!): Itinerary
}

# Mutation types
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addItinerary(name: String!): Itinerary
    removeItinerary(ID: ID!): Itinerary
    removeSavedItem(itinID: ID!, itemID: String!): Itinerary
    addSavedItems(yelpID: String!, name: String!, image: String!, url: String!, location: String!, rating: Float!, categories: [String!], price: String, itinName: String!): Itinerary
}
`

module.exports = typeDefs;