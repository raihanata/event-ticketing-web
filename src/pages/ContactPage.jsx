import React, { useState } from 'react';
import HeaderTwo from '../components/HeaderTwo';
import './ContactPage.css';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        break;

      case "email":
        if (!value.trim()) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Enter a valid email";
        break;

      case "subject":
        if (!value.trim()) error = "Subject is required";
        break;

      case "message":
        if (!value.trim()) error = "Message cannot be empty";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (!formData[key]) newErrors[key] = `${key} is required`;
    });

    if (Object.values(newErrors).some((err) => err)) {
      setErrors(newErrors);
      return;
    }

    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");


    navigate("/");
  };

  return (
    <>
      <HeaderTwo />

      <div className="container">
        <section className="contact-section">
          <div className="div-h2"><h2>Contact Us</h2></div>

          <div className="container contact-grid">
            {/* Left Side Contact Info */}
            <div className="contact-info">
              <div className="contact-header">
                <h2>Get In Touch</h2>
                <p>
                  Ready to make your event a success? Reach out to our team for
                  all your ticketing needs. We're committed to providing
                  exceptional service and support.
                </p>
              </div>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-details">
                    <h3>Address</h3>
                    <p>123 Event Plaza, Suite 456<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567<br />Mon - Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>info@eventtickets.com<br />support@eventtickets.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="contact-form">
              <h3 className="form-title">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us more about your event or inquiry..."
                  />
                  {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
