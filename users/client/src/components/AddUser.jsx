import { useState } from "react";

export default function AddUser() {

  
  
const [formValues, setFormValues] = useState({
  userName: "",
  firstName: "",
  lastName: "",
  favNumber: 0,
  isActive: false,  
})
const handleChange = (event) => {
  console.log(event.target)
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
          <label htmlFor="firstName">Firas Name: </label>
          <input type="text" name="firsstName" value={formValues.firstName} onChange={handleChange} />
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
          <button>Add User</button>
        </div>
      </form>
    </>
  );
}
