import React, { useState } from 'react'
import HeaderTwo from '../components/HeaderTwo'
import './login.css'
import { Await, href, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [email,setEmail]= useState('');
  const[password,setPassword] = useState ('');
  const[rember,setRember] = useState ('');
  const [error,setError] = useState ('');
  const [loading,setLoading] = useState('');
  const navigate = useNavigate();

 const API_URL ="https://event-ticketing-backend-643r.onrender.com/login";

  const handleLogin = async (data) => {

    setError('');
    setLoading('');

    try{
      const res  = await axios.post(API_URL, data).then(res=> {
        console.log(res.data)
      }).catch(err=> {
        console.log(err)
      })
      localStorage.setItem("auth_token",res.data.token);
      alert("Loginsucessful!");
    }catch (err){
      if (err.response){
        setError(err.response.data.message || "login falied ");
      }else{
        setError(err.message);
      }
    }finally{
      setLoading();
    }
  };

  const handleSumbit = (event)=>{
    event.preventDefault();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    alert("Please enter your email");
    return;
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
  if (!password) {
    alert("Please enter your password");
    return;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }
  if(!rember){
    alert("please check the rember me box ");
    return
  }

    handleLogin({ email, password, rember })
    
    setEmail('');
    setPassword('');
    setRember('');
    


if (email && password){
  navigate("/")
} else{
  alert('please fill in both fileds')
};


};

return (

   <>
    <HeaderTwo/> 
    
   
  <div className="container">

   < div className='login'>
       <div className="form-container"> 
        <div id="loginForm" className="form active">
          <h1>Welcome</h1>
          <p className="subtitle">Sign in to continue to your account</p>
          <form onSubmit={handleSumbit}   id="signupForm">
            <div className="input-group">
              <img
                src="https://api.iconify.design/mdi:email-outline.svg"
                alt="Email"
                className="input-icon"
              />
              <input
                type="email"
                value={email} onChange={(e) =>setEmail(e.target.value)}
                id="email"
                placeholder="Your Email"
            
              />
            
            </div>
            <div className="input-group">
              <img
                src="https://api.iconify.design/mdi:lock-outline.svg"
                alt="Password"
                className="input-icon"
              />
              <input
                type="password"
                id="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"

              />
            </div>
            <div className="remember-forgot">
              <label className="remember">
                <input type="checkbox" value={rember} onChange={(e) => setRember(e.target.checked)} id="remember" />
                <span>Remember me</span>
              </label>
              <a href="#" data-form="forgotForm">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="signup-btn">
              Sign In
            </button>
            <div className="divider">
              <span>or continue with</span>
            </div>
            <button type="button" className="google-btn">
              <img
                src="https://api.iconify.design/flat-color-icons:google.svg"
                alt="Google"
              />
              Google
            </button>
            <p className="login-link">
              Don't have an account?{" "}
              <Link  to="/register" className="switch-form" data-form="registerForm">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <div id="registerForm" className="form">
          <h1>Create Account</h1>
          <p className="subtitle">Sign up to get started</p>
          <form id="registerFormElement">
            <div className="input-group">
              <img
                src="https://api.iconify.design/mdi:account-outline.svg"
                alt="Name"
                className="input-icon"
              />
              <input
                type="text"
                id="name"
                placeholder="Your Name"
              
              />
            </div>
            <div className="input-group">
              <img
                src="https://api.iconify.design/mdi:email-outline.svg"
                alt="Email"
                className="input-icon"
              />
              <input
                type="email"
                id="registerEmail"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="input-group">
              <img
                src="https://api.iconify.design/mdi:lock-outline.svg"
                alt="Password"
                className="input-icon"
              />
              <input
                type="password"
                id="registerPassword"
                placeholder="Create Password"
                required=""
              />
            </div>
            <div className="input-group">
              <img
                src="https://api.iconify.design/mdi:lock-check-outline.svg"
                alt="Confirm Password"
                className="input-icon"
              />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required=""
              />
            </div>
            <button type="submit" className="signup-btn">
              Create Account
            </button>
            <div className="divider">
              <span>or continue with</span>
            </div>
            <button type="button" className="google-btn">
              <img
                src="https://api.iconify.design/flat-color-icons:google.svg"
                alt="Google"
              />
              Google
            </button>
            <p className="login-link">
              Already have an account?{" "}
              <a href="#" className="switch-form" >
                Sign In
              </a>
            </p>
          </form>
        </div>
        <div id="forgotForm" className="form">
          <h1>Reset Password</h1>
          <p className="subtitle">Enter your email to reset your password</p>
          <form id="resetPasswordForm">
            <div className="input-group">
              <img
                src="https://api.iconify.design/mdi:email-outline.svg"
                alt="Email"
                className="input-icon"
              />
              <input
                type="email"
                id="resetEmail"
                placeholder="Your Email"
                
              />
            </div>
            <button type="submit" className="signup-btn">
              Send Reset Link
            </button>
            <p className="login-link">
              Remember your password?{" "}
              <a href="#" className="switch-form" data-form="loginForm">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
  
  



    </div>
</div>
</>
  )
}

export default Login