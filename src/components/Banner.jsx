import React from 'react'
import '../App.css';
import '../components/header.css'
import imgbennerleft from '../assets/images/bannerleftimg.png'
const Banner = () => {
  
  return ( 
   <section id='banner'>
      <div className="container bannerdiv ">
        <div className='bannerleft'> <img src={imgbennerleft} alt="" /></div>
        <div className='bannerright'>
          <h3>SBS MTV The Kpop Show Ticket  Package</h3>
          <p>Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.</p>
          <button className='buttonone btnleanmore'>Get Ticket</button>
          <button className='btnleanmore' >Learn More</button>
        </div >
      </div>
   </section>
  )
}

export default Banner