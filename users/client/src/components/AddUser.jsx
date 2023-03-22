import { useMutation } from "@apollo/client";
import { useState } from "react";
import mutations from '../api/mutations';
import {useNavigate} from 'react-router-dom';


export default function AddUser() {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: '',
    firstName: '',
    lastName: '',
    favNumber: 0,
    isActive: false,
  });

 const handleChange = (event) => {
    const newData = {
      ...formValues,
      [event.target.name]: event.target.value,
    };
    if (event.target.name === 'isActive') {
      newData.isActive = !formValues.isActive;
    }
    setFormValues(newData);
  };

const {addUser: addUserMutation} = mutations;
const [addUserMutationFunc] = useMutation(addUserMutation);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    addUserMutationFunc({
      variables: {
      ...formValues,
      userID: new Date().valueOf(),
      favNumber: Number(formValues.favNumber)
     },
    });
    console.log("New User Submitted", formValues)
    navigate('/database');
  };



  return (
    <>
      <span>Add New User</span>
      <form>
        <div>
          <label htmlFor="userName">Username: </label>
          <input type="text" name="userName" value={formValues.userName} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" value={formValues.firstName} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" value={formValues.lastName} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="favNumber">Fav Number: </label>
          <input type="number" name="favNumber" value={formValues.favNumber} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="isActive">Is User Active? </label>
          <input type="checkbox" name="isActive" value={formValues.isActive} onChange={handleChange} />
        </div>

        <div>
          <button onClick={handleSubmit}>Add User</button>
        </div>
      </form>
    </>
  );
}
