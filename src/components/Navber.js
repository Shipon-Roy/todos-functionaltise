import React from "react";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const Navber = ({ users, deleteHandler }) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Todos
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          {!users[0] ? (
            <Link to="/login">
              <h5>
                <BiLogIn  />
              </h5>
            </Link>
          ) : (
            <>
              <span>{users[0].name}</span>
              <FiLogOut onClick={() => deleteHandler(users[0].id)} style={{ marginLeft: "10px", fontSize: "20px", color: "red", cursor: "pointer" }} />
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navber;
