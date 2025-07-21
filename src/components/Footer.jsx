import React from 'react'
 import './Footer.css';
 import imgurl from '../assets/images/logo_360.png';
const Footer = () => {
  return (
    <footer id='footer1'>
      <div className="container">
      <div className='footerdiv'>/
       <div className='logo of event'>
      <img src={imgurl} alt="" />
      </div>
      <div className='div-global'>
      Eventick is a global self-service ticketing platform <br />
      for live experiences that allows anyone to create,<br /> share, find and attend events that fuel their <br />
        passions and enrich their lives.
      </div>

      </div>

        
      </div>
    </footer>
  )
}

export default Footer