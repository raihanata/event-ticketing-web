import React, { useState } from 'react'
import HeaderTwo from '../components/HeaderTwo'
import './login.css'
import { Await, href, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Otpsection from '../components/Otpsection'
import Forgotpassword from '../components/Forgotpassword'
import EmailRecovery from '../components/EmailRecovery'

const Login = () => {
  const [email,setEmail]= useState('');
  const[password,setPassword] = useState ('');
  const[rember,setRember] = useState ('');
  const[errors,setErrors] = useState ({});
  const [loading,setLoading] = useState('');
  const[showForgot,setShowForgot] =useState(false);

  const [showOtpInput, setShowOtpInput] = useState(false)


    const[showEmail,setshowEmail] = useState(false);
  const navigate = useNavigate();

 const API_URL ="https://event-ticketing-backend-643r.onrender.com/login";

      const validateForm = () =>{
        const newErrors= {};
        if (!email){
          newErrors.email = "Email is required";
        }else if (!/\S+@\S+\.\S+/.test(email)){
          newErrors.email ="Enter a valid email address "
        }
        if (!password){
          newErrors.password ="password is required"
        } else if (password.length<6){
          newErrors.password ="password must be at least six character  "
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
      }

      const handleLogin = async (data) => {
        setErrors('');
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
            setErrors(err.response.data.message || "login falied ");
          }else{
            setErrors(err.message);
          }
        }finally{
          setLoading();
        }
      };

      const handleSumbit = (event)=>{
        event.preventDefault();
        if(!validateForm()) return;

      

        handleLogin({ email, password, rember })
        
        setEmail('');
        setPassword('');
        setRember('');
          


    if (email && password){
      // navigate("/")
    } else{
      alert('please fill in both fileds')
    };


    };

    const handleSendOtp = (e) => {
      e.preventDefault()
      // send otp api

      setShowForgot(false)
      setShowOtpInput(true)
    }
    const handlePassword = (e)=>{
      e.preventDefault()
      setShowOtpInput(false)
      setshowEmail(true)
    }
   const handleEmail = (e) =>{
    e.preventDefault()
    setPassword(false)
    setshowEmail(false)
   }

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
            {errors.email && (
                  <p style={{color: 'red'}}>{errors.email}</p>
                )}


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
              {errors.password && (
                  <p style={{color: 'red'}}>{errors.password}</p>
                )}
            </div>
            <div className="remember-forgot">
              <label className="remember">
                <input type="checkbox" value={rember} onChange={(e) => setRember(e.target.checked)} id="remember" />
                <span>Remember me</span>
              </label>
              <a href="#" onClick={(e)=> {e.preventDefault();setShowForgot(true);}}>
                Forgot Password?
              </a>
              
                </div>
            <button type="submit" className="signup-btn">
              Sign In
            </button>
            
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
                  { showForgot && <Forgotpassword setShowForgot ={setShowForgot} handleSendOtp={handleSendOtp}/>}
                  {
                    showOtpInput && <Otpsection setShowForgot={setShowForgot} handlePassword={handlePassword}/>
                  }
                  {
                    showEmail && <EmailRecovery setshowPassword ={setShowForgot} handleEmail={handleEmail}/>
                  }
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
      </div>
  
  



    </div>
</div>
</>
  )
}

export default Login