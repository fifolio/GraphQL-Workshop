import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Users from "./components/Users";


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users Database</Link>
          <Link to="/add-user">Add User</Link>
        </nav>
      </header>
      <h3>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
        </Routes>
      </h3>
    </div>
  );
}

export default App;
