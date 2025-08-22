import React from 'react'

const Forgotpassword = ({setShowForgot,handleSendOtp}) => {
  return (
    <>
      <div className="popup-overlay">
                        <div className="popup-card">
                          <h2>Find your email</h2>
                          <p>Enter your recovery email</p>

                          <form onSubmit={handleSendOtp}>
                            <input
                              type="email"
                              placeholder="Email"
                              required
                            />
                            <div className="btn-group">
                              <button type="button" className="link-btn" onClick={()=> setShowForgot(false)}>
                                Back to sign in
                              </button>
                              <button type="submit" className="submit-btn" >
                                Send OTP
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>  
    </>
  )
}

export default Forgotpassword
