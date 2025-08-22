import React from 'react'
import HeaderTwo from './HeaderTwo'

const Otpsection = ({setShowForgot,handlePassword}) => {

  return (
    <>
    <div className="popup-overlay">
      <div className="popup-card">
        <h2>Enter OTP</h2>
        <p>Enter your OTP here</p>

        <form  onSubmit={handlePassword}>
          <input
            type="number"
            placeholder="OTP"
            required
          />
          <div className="btn-group">
            <button type="button" className="link-btn" onClick={()=> setShowForgot(false)}>
              Back to sign in
            </button>
            <button type="submit" className="submit-btn">
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


