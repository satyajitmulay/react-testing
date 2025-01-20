import { useState } from "react";
import "./index.css";

export default function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const loginData = {
        username,
        password
    }

    console.log(loginData)
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            required
            autoComplete="off"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            autoComplete="off"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
