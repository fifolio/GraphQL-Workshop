import { gql } from "@apollo/client";

const mutations = {
  removeUser: gql`
    mutation removeUserFunction($userID: ID!){
        removeUser(id: $userID)
      }
  `,
  addUser: gql`
  mutation addUserFunction(
    $userID: ID!,
    $userName: String!
    $firstName: String!
    $lastName: String!
    $favNumber: Int!
    $isActive: Boolean! 
  ){
    addUser(
    id: $userID
    userName: $userName
    firstName: $firstName
    lastName: $lastName
    favNumber: $favNumber
    isActive: $isActive 
    )
  }
  `,

  editUser: gql`
  mutation editUserFunction(
      $userID: ID!,
    $userName: String!
    $firstName: String!
    $lastName: String!
    $favNumber: Int!
    $isActive: Boolean! 
  ){
    editUser (
    id: $userID
    userName: $userName
    firstName: $firstName
    lastName: $lastName
    favNumber: $favNumber
    isActive: $isActive 
    ){
    userName
    firstName
    lastName
    favNumber
    isActive 
    }
  }
  `,
};

export default mutations;