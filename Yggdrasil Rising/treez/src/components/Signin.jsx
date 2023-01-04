import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { UserAuth } from '../context/AuthContext';


const Signin = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
  
    

    const handleSubmit = async (e) => {
        error.preventDefault();
        setError('')
        try {
          Signin(email, pass)
          navigate('/account')
        } catch (error) {
          setError(error.message)
          console.log(error.message)
    }
};

    return (
  <div className="Main-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Sign in to your account</h2>
            {/* <label htmlFor="email">email</label> */}
            <input value={email} onChange={(error) => setEmail(error.target.value)}type="email" placeholder="Enter your email" id="email" name="email" />
            {/* <label htmlFor="password">password</label> */}
            <input value={pass} onChange={(error) => setPass(error.target.value)} type="password" placeholder="Enter your password" id="password" name="password" />
            
            <button className="b-container" type="submit">Sign In</button>
        </form>
        <div className="reg">
        <p>Don't have an account yet?</p>
          <Link to='/signup' className='underline'>
             Sign up
          </Link>
        </div>
    </div>
    );
}

export default Signin;