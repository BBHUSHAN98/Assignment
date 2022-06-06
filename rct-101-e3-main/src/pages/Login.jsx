import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Login = () => {

  const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);
  
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name] : value,
    })
   
    const handleSubmit = (e) => {
      e.preventDefault();
      login();
      Navigate("/Products")
   } 
  } 
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input data-cy="login-email" placeholder="Enter Email" type="email" onChange={handleSubmit} />
          <br />
          <br />
          <input data-cy="login-password" placeholder="Enter Password" type="password" onChange={handleSubmit} />
          <br />
          <br />
          <button data-cy="login-submit" type="submit">Login</button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
