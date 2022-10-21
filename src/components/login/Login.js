import React, {  useState } from "react";
import "./login.css";

const Login = ({addUser}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("All the fieled mendatory")
      return;
    }
    addUser({name, email, password})
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container">
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div class="underline-title"></div>
          </div>
          <form onSubmit={handleSubmit} class="form">
            <label for="user-name" style={{ paddingTop: "13px" }}>
              &nbsp;Name
            </label>
            <input
            value={name}
            onChange={e => setName(e.target.value)}
              id="user-name"
              class="form-content"
              type="text"
              name="name"
              required
              placeholder="hanks"
            />
            <div class="form-border"></div>
            <label for="user-email" style={{ paddingTop: "13px" }}>
              &nbsp;Email
            </label>
            <input
            value={email}
            onChange={e => setEmail(e.target.value)}
              id="user-email"
              class="form-content"
              type="email"
              name="email"
              autocomplete="on"
              required
              placeholder="email@gmail.com"
            />
            <div class="form-border"></div>
            <label for="user-password" style={{ paddingTop: "22px" }}>
              &nbsp;Password
            </label>
            <input
            value={password}
            onChange={e => setPassword(e.target.value)}
              id="user-password"
              class="form-content"
              type="password"
              name="password"
              required
              placeholder="*******"
            />
            <div class="form-border"></div>
            <a href="#">
              <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
            <a href="#" id="signup">
              Don't have account yet?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
