import React, { useState } from 'react'

const EmailRecovery = ({ setShowForgot, handleNewpassword,}) => {
  const [newPassword, setNewpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    handleNewpassword(newPassword);

  }
  return (
    <>
      <div className="popup-overlay">
        <div className="popup-card">
          <h2>Enter new password</h2>
          <p>Here</p>

          <form onSubmit={handleNewpassword}>
            <input
              type="password"
              placeholder="password"
              value={newPassword}
              onChange={(e) => setNewpassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div className="btn-group">
              <button type="button" className="link-btn" onClick={() => setShowForgot(false)}>
              </button>
              <button type="submit" className="submit-btn" onClick={handleSumbit}>
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