import { useQuery, gql } from "@apollo/client";

const getUsers = gql`
Query {
  getAllUsers {
    id,
    userName,
    firstName,
    lastName,
    favNumber,
    isActive
  }
}
`;

export default function Users() {

  const {loading, data, error} = useQuery(getUsers)

  return (
    <>
      <span>Users Page</span>
    </>
  );
}
