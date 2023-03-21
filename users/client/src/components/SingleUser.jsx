import { useQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';
import mutations from "../api/mutations";
import queries from "../api/queries";



export default function SingleUser() {
// navigate
const navigate = useNavigate()

  const params = useParams();
  const {id} = params;
  const {getUser} = queries
  const {loading, data, error} = useQuery(getUser, {
    variables:{
      userID: id
    }
  });

  const {removeUser} = mutations;
  const [removeUserMutationFunc] = useMutation(removeUser)

  // Handle Delete
const handleDeleteClicked = () => {
  removeUserMutationFunc({
    variables: {
      userID: id
    }
  })
  console.log("Deleted")
  navigate('/database')
}

  return (
    <>
      <span>User Panel</span>
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
          <tr>
            <td>{data.getUser.id}</td>
            <td>{data.getUser.userName}</td>
            <td>{data.getUser.firstName}</td>
            <td>{data.getUser.lastName}</td>
            <td>{data.getUser.favNumber}</td>
            <td>{data.getUser.isActive ? (<b className="Active">Active</b>) : (
            <b className="NotActive">Not Active</b>)}
        </td>
      </tr>
}
        </tbody> 
      </table>
      {loading && <p>Loading User Information's ...</p>}
      {error && <p>Error: {error.message}</p>}
      <br />
      <div>
        <button onClick={handleDeleteClicked} style={{"background": "#DB192F"}}>Delete</button>
        <button style={{"margin": "0 20px"}}>Edit</button>
        <button style={{"background": "#00C75D"}}>Save</button>
      </div>
    </>
  );
}
