const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    doesItWork: Boolean!
    getAllUsers: [User!]!
  }
  type User {
    id: ID!
    userName: String!
    firstName: String!
    favNumber: Int!
    isActive: Boolean!
  }
`;
