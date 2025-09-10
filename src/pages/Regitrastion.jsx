import React, { useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import './Regitrastion.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
import { SERVER_URL } from "../lib/url";
import { Eye, EyeOff } from "lucide-react";
const Regitrastion = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmpassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [errors, setErrors] = useState({});
  const [selectedoption, setSelectedOption] = useState('');
  const [selectedcountry, setSelectedCountry] = useState('');
  // const [isChecked, setIsChecked] = useState();
  // const [isChecked1, setIsChecked1] = useState();
  const [Phone, setPhone] = useState('');

  const[isPasswordVisible,setIsPasswordVisible] = useState(false)
      const togglePasswordVisibility= ()=>{
        setIsPasswordVisible((prev)=>!prev);
      }




  // const API_URL = "https://event-ticketing-backend-643r.onrender.com/register";
  const validateForm = () => {
    const newErrors = {};
    if (!firstname.trim()) newErrors.firstname = 'First name is required';
    if (!lastname.trim()) newErrors.lastname = 'Last name is required';



    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!Phone) {
      newErrors.Phone = 'phone number is required'
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!selectedoption) {
      newErrors.gender = 'please select your gender';
    }
    if (!selectedcountry || selectedcountry === 'select a country') {
      newErrors.country = 'please select a country';
    }
    // if (!isChecked) {
    //   newErrors.terms = 'you must agree to the terms and conditions';
    // }
    if (!firstname) {
      newErrors.firstname = ' name is required'
    }
    else if (!/^[A-Za-z]+$/.test(firstname)) {
      newErrors.firstname = 'Name must contain only alphabets';
    }
    else if (firstname.length < 3) {
      newErrors.firstname = 'name must be at least 3 characters'
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (even) => {
    setSelectedCountry(even.target.value);
  };

  const handleSumbit = async (event) => {
    event.preventDefault();


    if (!validateForm()) {
      alert('please fix validation errors');
      return;
    }
    console.log('Form data submitted:', { email, firstname, lastname });

    console.log('from data sumbitted:', { email, firstname, lastname, password, confirmPassword, selectedoption, selectedcountry, Phone });
    setEmail('');
    setPassword('');
    setConfirmpassword('');
    setFirstname('');
    setLastname('');
    setSelectedOption('');
    setPhone('');



    if (!(email && password && confirmPassword && firstname && lastname)) {
      console.log('hello world')

    } else {
      try {

        const userData = { email, firstname, lastname, password, confirmPassword, selectedoption, selectedcountry, phone: Phone }
         await axios.post(`${SERVER_URL}/register`, userData).then(res => {
          console.log(res.data)

          toast.success(res.data.message)
        }).catch(err => {
          console.log(err)
        })
        //  localStorage.setItem("auth_token",res.data.token);

    
      } catch (err) {
        if (err.response) {
          setErrors(err.response.data.message);
          toast.error("registration failed")
        } else {
          setErrors(err.message);
        }
      }

    }

  }

  return (

    <>
      <HeaderTwo />
      <ToastContainer />
      <div className="container">
        <div className="registration">
          <div className="title_container">
            <h2>Registration Form</h2>
          </div>

          <div className="row clearfix">
            <div>
              <form onSubmit={handleSumbit} id="form-page">


                <div className="input_field">
                  <span><i className="fa fa-envelope"></i></span>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div className="input_field">
                  <span><i className="fa fa-lock"></i></span>
                  <input type={isPasswordVisible? "text" :"password" } value={password} onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Password" 
                  />
                  <span className="toggle" onClick={(e)=>{
                    e.preventDefault ();
                    e.stopPropagation();
                    togglePasswordVisibility()
                  }}>
                     
                    {isPasswordVisible ? <EyeOff size={20} />:<Eye size={20} />}
                       
                  </span>
                  {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <div className="input_field">
                  <span><i className="fa fa-lock"></i></span>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="  confirm Password" />
                  {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}  </p>}
                </div>
                <div className="input_field">
                  <span><i className="fa fa-envelope"></i></span>
                  <input type="Phone" value={Phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
                  {errors.Phone && <p style={{ color: 'red' }}>{errors.Phone}</p>}
                </div>
                <div className="row clearfix">
                  <div className="col_half">
                    <div className="input_field">
                      <span><i className="fa fa-user"></i></span>
                      <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" />
                      {errors.firstname && <p style={{ color: 'red' }}>  {errors.firstname}</p>}
                    </div>
                  </div>
                  <div className="col_half">
                    <div className="input_field">
                      <span><i className="fa fa-user"></i></span>
                      <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" />
                      {errors.lastname && <p style={{ color: 'red' }}> {errors.lastname}</p>}
                    </div>
                  </div>
                </div>
                <div className="gender-group">
                  <input type="radio" value="Male" checked={selectedoption === 'Male'} onChange={(e) => setSelectedOption(e.target.value)} name="gender" id="rd1" />
                  <label htmlFor="rd1">Male</label>
                  <input type="radio" value="Female" checked={selectedoption === 'Female'} onChange={(e) => setSelectedOption(e.target.value)} name="gender" id="rd2" />
                  <label htmlFor="rd2">Female</label>
                </div>
                {errors.gender && <p style={{ color: 'red ' }}> {errors.gender}</p>}

                <div className="input_field select_option">
                  <select value={selectedcountry} onChange={handleChange}>
                    <option>Select a country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                  <div className="select_arrow"></div>
                  {errors.country && <p style={{ color: 'red ' }}> {errors.country}</p>}
                </div>
                {/* <div className="check-box-container">
                  <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} id="cb1" />
                  <label htmlFor="cb1" >I agree with terms and conditions</label>
                  {errors.terms && <p style={{ color: 'red' }}> {errors.terms}</p>}
                </div>
                <div className="check-box -container">
                  <input type="checkbox" checked={isChecked1} onChange={(e) => setIsChecked1(e.target.checked)} id="cb2" />
                  <label htmlFor="cb2">I want to receive the newsletter</label>
                </div> */}

                <div className="input_field">
                  <input className="button1" type="submit" value="Register" />

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>








    </>
  )

}
export default Regitrastion