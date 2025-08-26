import React, { useState } from 'react'
import HeaderTwo from './HeaderTwo'

const Otpsection = ({setShowForgot,handleVerifyotp,email}) => {
const[otp,setOtp]=useState("")
  const handleSumbit = (e) =>{
      e.preventDefault()
    handleVerifyotp(otp,email)
  }
  return (
    <>
    <div className="popup-overlay">
      <div className="popup-card">
        <h2>Enter OTP</h2>
        <p>Enter your OTP here</p>

        <form  onSubmit={handleVerifyotp}>
          <input
            type="text"
            inputMode='numeric'
            pattern='[0-9]'
            placeholder="OTP"
            value={otp}
            onChange={(e)=> setOtp(e.target.value)}
            required
          />
          <div className="btn-group">
            <button type="button" className="link-btn" onClick={()=> setShowForgot(false)}>
              Back to sign in
            </button>
            <button type="submit" className="submit-btn" onClick={handleSumbit}>
              Confirm OTP
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Otpsection


