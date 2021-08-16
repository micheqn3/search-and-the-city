// Import gql to provide type definitions

const { gql } = require('apollo-server-express');

const typeDefs = gql`
# Define schema types
type User {
    _id: ID
    username: String!
    email: String!
}

type Auth {
    token: ID
    user: User
}

# Define query types 
type Query {
    me: User
}

# Mutation types
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`

module.exports = typeDefs;