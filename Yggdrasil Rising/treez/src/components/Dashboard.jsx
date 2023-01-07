import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { UserAuth } from "../context/AuthContext";



const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    error.preventDefault();
    setError("");
    try {
      Signin(email, pass);
      navigate("/account");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="Main-container">
          <h2>Welcome!</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="email">email</label> */}
        <div className="InputContainer">
          <div className="box">
          <input value={email}onChange={(error) => setEmail(error.target.value)}
            type="email"
            placeholder="Enter Email"
            id="email"
            name="email"
          />
          {/* <label htmlFor="password">password</label> */}
          <input
            value={pass}
            onChange={(error) => setPass(error.target.value)}
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
          />    
          </div>
          {/* create a sign in button */}
          <button className="b-container" type="submit">Sign In</button>
          <div className="Horizontal"></div>
        </div>
        
      
      <div className="reg">
        <p>No Account?</p>
        <Link to="/signup" className="underline">
          Sign up
        </Link>
      </div>
      </form>

    </div>
  );
};

export default Signin;
