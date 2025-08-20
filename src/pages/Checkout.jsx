import React, { useState } from 'react'
import HeaderTwo from '../components/HeaderTwo'
import './checkout.css'
const Checkout = () => {

const [selectedPayment, setSelectedPayment] = useState('');
    const paymentMethods = [
    { id: 'upi', name: 'UPI', description: 'Pay using UPI apps' },
    { id: 'netbanking', name: 'Net Banking', description: 'All major banks supported'},
    { id: 'card', name: 'Credit/Debit Card', description: 'Visa, Mastercard, Rupay'},
    { id: 'paypal', name: 'PayPal', description: 'International payments'}
  ];

  return (
    <>
    <HeaderTwo/>
    <div className='container'>
     <div className="checkout-header">
          <h1>Complete Your Purchase</h1>
          <p>Secure checkout for your event tickets</p>
        </div>

        <form  className="checkout-form">
          <div className="form-section">
            {/* Personal Information */}
            <div className="form-card">
              <h2 className="section-title">
                <span className="icon">👤</span>
                Personal Information
              </h2>
              
              <div className="form-grid">
                <div className="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Enter first name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Enter last name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                  required
                    placeholder="Enter email address"
                  />
                </div>
                
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                 required
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="form-card">
              <h2 className="section-title">
                <span className="icon">📍</span>
                Billing Address
              </h2>
              
              <div className="form-fields">
                <div className="form-group full-width">
                  <label>Address *</label>
                  <input
                    type="text"
                    name="address"
               required
                    placeholder="Enter address"
                  />
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                   required
                      placeholder="Enter city"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>State *</label>
                    <input
                      type="text"
                      name="state"
                   required
                      placeholder="Enter state"
                    />
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-group">
                    <label>ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                   required
                      placeholder="Enter ZIP code"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Country *</label>
                    <select
                      name="country"
                    //   value={formData.country}
                    //   onChange={handleInputChange}
                    //   required
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="form-card">
              <h2 className="section-title">
                <span className="icon">🔒</span>
                Payment Method
              </h2>
              
              <div className="payment-methods">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`payment-option ${selectedPayment === method.id ? 'selected' : ''}`}
                    onClick={() => setSelectedPayment(method.id)}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={selectedPayment === method.id}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    <div className="payment-info">
                      <h3>{method.name}</h3>
                      <p>{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="summary-section">
            <div className="summary-card">
              <h2>Order Summary</h2>
              
              {/* Event Image */}
              <div className="event-image">
                <img
                //   src={eventData.image}
                //   alt={eventData.name}
                />
              </div>
              
              {/* Event Info */}
              <div className="event-info">
                {/* <h3>{eventData.name}</h3> */}
                
                <div className="event-details">
                  <div className="detail-item">
                    <span className="icon">📅</span>
                    {/* {eventData.date} */}
                  </div>
                  <div className="detail-item">
                    <span className="icon">📍</span>
                    {/* {eventData.venue} */}
                  </div>
                </div>
              </div>
              
              {/* Ticket Breakdown */}
              <div className="ticket-breakdown">
                <h4>Tickets</h4>
                {/* {eventData.tickets.map((ticket, index) => (
                  <div key={index} className="ticket-item">
                    <div className="ticket-details">
                      <span className="ticket-type">{ticket.type}</span>
                      <span className="ticket-quantity">x{ticket.quantity}</span>
                    </div>
                    <span className="ticket-price">₹{(ticket.price * ticket.quantity).toLocaleString()}</span>
                  </div>
                ))} */}
              </div>
              
              {/* Price Breakdown */}
              <div className="price-breakdown">
                <div className="price-item">
                  <span>Subtotal</span>
                  {/* <span>₹{subtotal.toLocaleString()}</span> */}
                </div>
                <div className="price-item">
                  <span>Processing Fee</span>
                  {/* <span>₹{fees.toLocaleString()}</span> */}
                </div>
                <div className="price-total">
                  <span>Total</span>
                  {/* <span>₹{total.toLocaleString()}</span> */}
                </div>
              </div>
              
              {/* Proceed Button */}
              <button
                // type="submit"
                // disabled={isProcessing}
                 className="proceed-button"
              >
                {/* {isProcessing ? (
                  <div className="processing">
                    <div className="spinner"></div>
                    Processing...
                  </div>
                ) : (
                  `Proceed to Pay ₹${total.toLocaleString()}`
                )} */}
                Proceed to Pay 
              </button>
              
              <p className="security-note">
                {/* <span className="icon">🔒</span>
                Your payment information is secure and encrypted */}
              </p>
            </div>
          </div>
        </form>
    </div>
    </>

  )
}

export default Checkout