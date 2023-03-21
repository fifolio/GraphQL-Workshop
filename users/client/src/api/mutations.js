import { gql } from "@apollo/client";

const mutations = {
  removeUser: gql`
    mutation removeUserFunction($userID: ID!){
        removeUser(id: $userID)
      }
  `,
};

export default mutations;