import React, { useState, useContext } from "react";
import "./login.css";
import axios from "axios";
import UserContext from "../../../../Context/UserContext";
import { Link,Navigate,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
     
      const response = await axios.post(
        "http://localhost:8080/admin/login",
        formData
      );
  
      console.log(response.data);
      
      const { email, token, type } = response.data;
      login(email, token, type);
      // console.log(Login);


      setError(''); // Clear any previous error message
      setSuccess(response.data.message || 'Login successful!'); // Set the success message
      toast.success(response.data.message || 'Login successful!', {
        position: "bottom-right",
        autoClose: 5000,
      });
      navigate('/admin/dashboard')
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, e.g., display an error message
  
      setSuccess(""); // Clear any previous success message
      setError(error.message || "Login failed. Please try again."); // Set the error message
  
      toast.error(error.message || "Login failed. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
      });
    }
  };
  

  return (
    <div className="container joincontiner">
       <ToastContainer />
      <div className="login-form-wrap">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <p>
            <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleInputChange}
              className="email"
              placeholder="Email Address"
              required
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="password"
              placeholder="Password"
              required
            />
          </p>
          <p>
            <input type="submit" className="login" value="Login" />
          </p>
        </form>
        <div className="create-account-wrap">
          <p>
            Not a member? <Link to="/admin/joinus">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
