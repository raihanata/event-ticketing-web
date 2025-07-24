import React from 'react'
 import './Footer.css';
const Footer = () => (
  <footer id='footer1'>
    <div className="container">

<div className='footerdiv'>
  <div className='main1'>
        <div className='logo-div'>
          <img src="src/assets/images/logo.png" alt="logo" />
        
      
        <div className='div-p'>
          <p>Eventick is a global self-service ticketing platform  <br />
            for live experiences that allows anyone to create,<br />
            share, find and attend events that fuel their <br />
            passions and enrich their lives.</p>
            <div className='social-links'>
              <div className='div-link'>
                <img src="src/assets/images/facebook.svg" alt="facebook" />
                </div>
                <div className='div-link'>
                  <img src="src/assets/images/twitter.svg" alt=" twitter" />
                </div>
                <div className='div-link'>
                    <img src="src/assets/images/linkedin (1).svg" alt="linkedin" />      
                </div>
                
            </div>
        </div>
      </div>
      
        <div className='div-plan'>
            
            <h3>plan Events</h3>

            <ul className='l1'>
              <li>Crate and set up</li>
              <li>sell Tickets</li>
              <li>online RSVP</li>
              <li>online EVents</li>
            </ul>
            
        </div>
          <div className='div-eventick'>
              <h3>Eventick</h3>

              <ul className='l1'>
                <li>About U</li>
                <li>Press</li>
                <li>Contact Us</li>
                <li>Help Center</li>
                <li>How it Works</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          
        
        <div className='loop'>
              <h3>Stay in the loop</h3>
               <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
          <div className='subcribe-div'>
           <input type="email" placeholder="Enter your email address..."  className='input-email'/>
             <button className='button'>Subscribe Now</button>  
          </div>
        </div>


          <div className="row">
  <div className="col-md-12 copy">
    <p className="text-center">
    Copyright © 2022 Avi Yansah.
    </p>
  </div>
</div>
          
  </div>
            
            

              
          


  




</div>


    </div>
  </footer>
)

export default Footer