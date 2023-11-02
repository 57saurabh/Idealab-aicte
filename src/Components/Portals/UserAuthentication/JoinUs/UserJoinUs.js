import React, { useState } from 'react';
import './signUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function UserJoinUs() {
  const [error, setError] = useState('');
  const [success, setSuccess] =useState('')

  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    college: '',
    course: '',
    stream: '',
    email: '',
    password: '',
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/register', formData);
      console.log('API Response:', response.data);
      console.log('API Response:', response.data.message);

      setFormData({
        name: '',
        fathersName: '',
        college: '',
        course: '',
        stream: '',
        email: '',
        password: '',
      });

      // if (response.data==='') {
        
      // }
      setError(''); // Clear any previous error message
      setSuccess(response.data.message || 'Signup successful!'); // Set the success message
      toast.success(response.data.message || 'Signup successful!', {
        position: 'bottom-right',
        autoClose: 5000,
      });
    } catch (error) {
      console.error('Error sending data to API:', error);
      setSuccess(""); // Clear any previous success message
      setError(error.message || "Login failed. Please try again."); // Set the error message
  
      toast.error(error.message || "Login failed. Please try again.", { 
        position: "bottom-right",
        autoClose: 5000,
      });
    }
    
  };

  return (
    <div className='container joincontainer'>
    <ToastContainer />
      <div className="login-form-wrap">
        <h2>Join Us</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              className="name"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </p>
          <p><input
            type="text"
            name="fathersName"
            placeholder="Father's Name"
            value={formData.fathersName}
            onChange={handleInputChange}
            required
          /></p>
          <p>
            <input
              type="text"
              className="collegeName"
              name="college"
              placeholder="College Name"
              required
              value={formData.college}
              onChange={handleInputChange}
            />
          </p>
          <p><input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleInputChange}
            required
          /></p>
          <p><input
            type="text"
            name="stream"
            placeholder="Stream"
            value={formData.stream}
            onChange={handleInputChange}
            required
          /></p>
          <p>
            <input
              type="email"
              className="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <input
              type="password"
              className="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </p>
         
          <p>
            <input type="submit" className="login" value="Create Account" />
          </p>
        </form>
        <div className="create-account-wrap">
          <p>
            Already a member? <Link to="/user/login">Login Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserJoinUs;
