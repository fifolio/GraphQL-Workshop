import { useQuery, gql } from "@apollo/client";

const getUsers = gql`
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
`;

export default function Users() {
  const { loading, data, error } = useQuery(getUsers);
  return (
    <>
      <span>Database</span>
      {loading && <p>Loading Users ...</p>}
      {error && <p>Error: {error.message}</p>}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Favorite Number</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getAllUsers.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.userName}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.favNumber}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
