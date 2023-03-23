const { gql } = require("apollo-server-express");

module.exports = gql`
# type Users {
#     id: Int,
#     userName: String,
#     firstName: String,
#     lastName: String,
#     favNumber: Int,
#     isActive: Boolean
#   }
  type Query {
    doesItWork: Boolean!
    getAllUsers: [User!]!
    # The following query will accept (id with type ID) and return User object (that already defined below)
    getUser(id: ID!): User!
  }
  type Mutation {
    addUser(
      id: ID!
      userName: String!
      firstName: String!
      lastName: String!
      favNumber: Int!
      isActive: Boolean!
    ): Boolean!
    removeUser(id: ID!): Boolean!
    editUser(
      id: ID!
      userName: String!
      firstName: String!
      lastName: String!
      favNumber: Int!
      isActive: Boolean!
    ): User!
  }
  type User {
    id: ID!
    userName: String!
    firstName: String!
    lastName: String!
    favNumber: Int!
    isActive: Boolean!
  }
`;
