export default function AddUser() {
  return (
    <>
      <span>Add New User</span>
      <form>
        <div>
          <label htmlFor="userName">Username: </label>
          <input type="text" name="firstName" />
        </div>

        <div>
          <label htmlFor="firstName">Firas Name: </label>
          <input type="text" name="firstName" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="firstName" />
        </div>

        <div>
          <label htmlFor="favNumber">Fav Number: </label>
          <input type="number" name="favNumber" />
        </div>

        <div>
          <label htmlFor="isActive">Is User Active? </label>
          <input type="checkbox" name="isActive" />
        </div>

        <div>
          <button>Add User</button>
        </div>
      </form>
    </>
  );
}
