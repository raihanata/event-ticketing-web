import React, { useMemo, useState } from "react";
import HeaderTwo from "../components/HeaderTwo";
import './Cart.css'




export default function Cart() {

  const ticketData = useMemo(()=> [
  { type: "VVIP", price: 200 },
  { type: "VIP", price: 150 },
  { type: "Gold", price: 120 },
  { type: "Silver", price: 100 },
  { type: "Regular", price: 80 },
  ], [])

  const [quantities, setQuantities] = useState(
    ticketData.reduce((acc, t) => ({ ...acc, [t.type]: 0 }), {})
  );
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState("");

  const handleQuantityChange = (type, rawValue) => {
    const value = Math.max(0, Number(rawValue) || 0);
    setQuantities((prev) => ({ ...prev, [type]: value }));
  };

  const handleApplyCoupon = () => {
    const code = coupon.trim().toLowerCase();
    if (!code) {
      setDiscount(0);
      setMessage("Please enter a coupon code.");
      return;
    }
    if (code === "event10") {
      setDiscount(0.1);
      setMessage("Coupon applied: 10% off");
    } else {
      setDiscount(0);
      setMessage("Invalid coupon code.");
    }
  };


  const subtotal = ticketData.reduce(
    (acc, t) => acc + t.price * (quantities[t.type] || 0),
    0
  );

  const total = Number((subtotal - subtotal * discount).toFixed(2));


    return(
         <>
         <HeaderTwo/>
        <div className="container"> 
                    <div className="cart-container">
      <h2 className="cart-title">🎟 Event Cart</h2>

      <div className="cart-items">
        {ticketData.map((ticket) => (
          <div key={ticket.type} className="cart-item">
            <span className="ticket-type">{ticket.type}</span>
            <span className="ticket-price">${ticket.price}</span>

            <input
              type="number"
              min="0"
              value={quantities[ticket.type]}
              onChange={(e) => handleQuantityChange(ticket.type, e.target.value)}
              className="ticket-qty"
            />

            <span className="ticket-subtotal">
              ${(ticket.price * (quantities[ticket.type] || 0)).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="coupon-section">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        <button className="apply-btn" onClick={handleApplyCoupon}>
          Apply Coupon
        </button>
      </div>

      {message && <div className="coupon-message">{message}</div>}

      <div className="total-section">
        <span>Subtotal:</span>
        <strong>${subtotal.toFixed(2)}</strong>
      </div>

      <div className="total-section">
        <span>Total:</span>
        <strong>${total.toFixed(2)}</strong>
      </div>

       <button className="checkout-btn">Proceed to Checkout</button> 
    </div>
        </div>
        </>
    )
}
