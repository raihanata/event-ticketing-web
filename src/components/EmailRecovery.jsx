import React from 'react'

const EmailRecovery = ({setShowForgot,handleEmail}) => {
  return (
    <>
        <div className="popup-overlay">
      <div className="popup-card">
        <h2>Enter new password</h2>
        <p>Here</p>

        <form onSubmit={handleEmail}>
          <input
            type="password"
            placeholder="password"
            required
          />
          <input
            type="password"
            placeholder="confirm password"
            required
          />
          <div className="btn-group">
            <button type="button" className="link-btn" onClick={()=> setShowForgot(false)}>
            </button>
            <button type="submit" className="submit-btn">
            save
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default EmailRecovery