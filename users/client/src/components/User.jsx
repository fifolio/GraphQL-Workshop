import { Link } from "react-router-dom";
export default function User(props) {
  const { index, user } = props;
  return (
    <>
      <tr key={index}>
        <td>
          <Link to={`/user/${user.id}`}>{user.id}</Link>
        </td>
        <td>{user.userName}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.favNumber}</td>
        <td>
          {user.isActive ? (
            <b className="Active">Active</b>
          ) : (
            <b className="NotActive">Not Active</b>
          )}
        </td>
      </tr>
    </>
  );
}
