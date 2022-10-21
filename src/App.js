import { useEffect, useState } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { v4 } from "uuid";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Navber from "./components/Navber";
import Products from "./components/Products";

const initialUsers = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

function App() {
  const [users, setUsers] = useState(initialUsers);
  
  const addUser = (user) => {
    setUsers([...users, { id: v4() ,...user}]);
  }

  const deleteHandler = (id) => {
    const newid = users.filter(user => user.id !== id);
    setUsers(newid);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])
  return (
    <Router>
      <Navber users={users} deleteHandler={deleteHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login addUser={addUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
