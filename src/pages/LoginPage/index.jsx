import React, { useState } from "react";

import { createSessions } from "../../services/api"

import "./style.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log('email', email);
    console.log('password', password);
    console.log("login");
    
    const response = await createSessions(email,password);
    console.log('login', response.data);
  };

  return (
    <div id="login">
      <h1 className="title">Login</h1>
      <div className="form">
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="actions">
          <button onClick={handleLogin} type="submit">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};
