/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'


const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { createUser } = UserAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await createUser(email, pass)
      // Login(email, pass)
      // navigate('/account')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
  }
}
  

  return (
<>
      <h1>Sign up for a free account</h1>
      <p>
        Already have an account? <Link to="/" className="underline">Sign in</Link>
      </p>
      <form onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          <label htmlFor="password">password</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <button type="submit">Sign Up</button>
      </form>
  </>
  )
}

export default Signup;