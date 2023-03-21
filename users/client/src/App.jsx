import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Database from "./components/Database";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/database">Database</Link>
          <Link to="/add-user">Add User</Link>
        </nav>
      </header>
      <h3>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/user/:id" element={<SingleUser />} />
        </Routes>
      </h3>
    </div>
  );
}

export default App;
