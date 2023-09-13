import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container joincontiner' >
     <div className="login-form-wrap">
    <h2>Login</h2>
    <form className="login-form">
      <p>
      <input type="text" className="username" name="username" placeholder="Username" required/>
      </p>
      <p>
      <input type="email" className="email" name="email" placeholder="Email Address" required/>
      </p>
      <p>
      <input type="submit" className="login" value="Login"/>
      </p>
    </form>
    <div className="create-account-wrap">
      <p>Not a member? <Link to='/joinus'>Create Account</Link></p>
    </div>
    </div>
    </div>
    
  )
}

export default Login