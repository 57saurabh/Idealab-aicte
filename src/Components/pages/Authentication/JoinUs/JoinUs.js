import React from 'react'
import './signUp.css'
import { Link } from 'react-router-dom'

function JoinUs() {
  return (
    <div className='container joincontiner' >
     <div className="login-form-wrap">
    <h2>Join Us</h2>
    <form className="login-form">
      <p>
      <input type="text" className="name" name="name" placeholder="Name" required/>
      </p>
      <p>
      <input type="text" className="collegeName" name="collgeName" placeholder="College Name" required/>
      </p>
      <p>
      <input type="email" className="email" name="email" placeholder="Email Address" required/>
      </p>
      <p>
      <input type="text" className="password" name="password" placeholder="Password" required/>
      </p>
     
      <p>
      <input type="submit" className="login" value="Create Account"/>
      </p>
    </form>
    <div className="create-account-wrap">
      <p>Already member? <Link to='/login'>Login Now</Link></p>
    </div>
    </div>
    </div>
    
  )
}

export default JoinUs