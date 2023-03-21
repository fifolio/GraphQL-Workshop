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
