import { useQuery } from "@apollo/client";
import queries from "../api/queries";
import User from "./User";

export default function Database() {
 


  const { getUsers } = queries;

  const { loading, data, error } = useQuery(getUsers);
  return (
    <>
      <span>Database</span>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>1st Name</th>
            <th>2nd Name</th>
            <th>Favorite Number</th>
            <th>User Activision</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getAllUsers.map((user, index) => {
              return <User user={user} key={index} />;
            })}
        </tbody>
      </table>
      {loading && <p>Loading Users ...</p>}
      {error && <p>Error: {error.message}</p>}
    </>
  );
}
