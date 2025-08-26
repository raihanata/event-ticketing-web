/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import HeaderTwo from '../components/HeaderTwo'
import  { SERVER_URL } from '../lib/url.js'
import './login.css'
import { Await, href, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Otpsection from '../components/OtpSection'
import Forgotpassword from '../components/Forgotpassword'
import EmailRecovery from '../components/EmailRecovery'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rember, setRember] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState('');
  const [showForgot, setShowForgot] = useState(false);

  const [showOtpInput, setShowOtpInput] = useState(false)


  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();

  // const API_URL_login = "https://event-ticketing-backend-643r.onrender.com/login";

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address "
    }
    if (!password) {
      newErrors.password = "password is required"
    } else if (password.length < 6) {
      newErrors.password = "password must be at least six character  "
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleLogin = async (data) => {
    setErrors('');
    setLoading('');

    try {
      const res = await axios.post(`${SERVER_URL}/login`, data).then(res => {
        console.log(res.data)
        navigate("/")
      }).catch(err => {
        console.log(err)
      })
      localStorage.setItem("auth_token", res.data.token);
      alert("Loginsucessful!");
    } catch (err) {
      if (err.response) {
        setErrors(err.response.data.message || "login falied ");
      } else {
        setErrors(err.message);
      }
    } finally {
      setLoading();
    }
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;



    handleLogin({ email, password, rember })

    setEmail('');
    setPassword('');
    setRember('');



    if (!email && password) {
      alert('please fill in both fileds')
    }


  };

  const handleCheckemail = async (e) => {
    e.preventDefault()
    try {
      console.log(email);

      const res = axios.post(`${SERVER_URL}/checkuser`, { email }).then(res => {
        console.log(res.data)
        setShowOtpInput(true)
        setShowForgot(false)
      }).catch(err => {
        console.log(err)
      })

    } catch (err) {
      if (err.response) {
        setErrors(err.response.data.message || " email not  found ");
      } else {
        setErrors(err.message);
      }
    } finally {
      setLoading();
    }



  }
  const handleVerifyotp = async (otp, email) => {



    try {
      console.log(email);

       await axios.post(`${SERVER_URL}/verifyotp`, { email, otp }, {

      }).then(res => {
        console.log(res.data)
        setShowOtpInput(false)
        setshowPassword(true)
           if (res.data.token) {
        localStorage.setItem("auth_token", res.data.token);
      }
      }).catch(err => {
        console.log(err)
      })

   
    } catch (err) {
      if (err.response) {
        console.log(err.response?.data || err.message);

      } else {
        setErrors(err.message || "OTP verification failed");
      }
    } finally {
      setLoading();
    }

  }
  const handleNewpassword = async (newPassword) => {
    console.log(newPassword);

    try {
      console.log(email);

      const token = localStorage.getItem('auth_token')
      console.log(token, 'tokne')


      if (!token) {

        throw Error('No reset token found, please verify OTP again.')
      } else {

        const res = await axios.post(`${SERVER_URL}/resetpassword`, { newpassword: newPassword }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(res => {
          console.log(res.data);
          toast("Password reset successful!");
          navigate('/login')

           setShowOtpInput(false)
        setshowPassword(false)
          // setShowForgot(false)
        }).catch(err => {
          console.log(err)
        })
      }
    } catch (err) {
      if (err.response) {
        console.log('Failed to reset password')
      } else {
        setErrors(err.message);
      }
    } finally {
      setLoading();
    }
  }

  return (

    <>
      <ToastContainer />
      <HeaderTwo />


      <div className="container">

        < div className='login'>
          <div className="form-container">
            <div id="loginForm" className="form active">
              <h1>Welcome</h1>
              <p className="subtitle">Sign in to continue to your account</p>
              <form onSubmit={handleSumbit} id="signupForm">
                <div className="input-group">
                  <img
                    src="https://api.iconify.design/mdi:email-outline.svg"
                    alt="Email"
                    className="input-icon"
                  />
                  <input
                    type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <p style={{ color: 'red' }}>{errors.email}</p>
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
                    <p style={{ color: 'red' }}>{errors.password}</p>
                  )}
                </div>
                <div className="remember-forgot">
                  <label className="remember">
                    <input type="checkbox" value={rember} onChange={(e) => setRember(e.target.checked)} id="remember" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" onClick={(e) => { e.preventDefault(); setShowForgot(true); }}>
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
                  <Link to="/register" className="switch-form" data-form="registerForm">
                    Sign Up
                  </Link>
                </p>
              </form>
              {showForgot && <Forgotpassword setShowForgot={setShowForgot} handleCheckemail={handleCheckemail} setEmail={setEmail} email={email} />}

              {
                showOtpInput && <Otpsection setShowForgot={setShowForgot} handleVerifyotp={handleVerifyotp} email={email} />
              }
              {
                showPassword && <EmailRecovery setshowPassword={setShowForgot} handleNewpassword={handleNewpassword} />
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