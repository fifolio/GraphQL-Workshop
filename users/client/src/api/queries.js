import { gql } from "@apollo/client";

const queries = {
  getUsers: gql`
    query {
      getAllUsers {
        id
        userName
        firstName
        lastName
        favNumber
        isActive
      }
    }
  `,
  getUser: gql`
    query getUserFunction($userID: ID!){
      getUser(id: $userID){
        id
        userName
        firstName
        lastName
        favNumber
        isActive 
      }
    }
  `,
};

export default queries;

// export default gql`
//   query {
//     getAllUsers {
//       id
//       userName
//       firstName
//       lastName
//       favNumber
//       isActive
//     }
//   }
// `;
