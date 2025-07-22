import React from 'react'
import upcomegriddiv1 from '../assets/images/gridupcomingimg1.png'
import upcomegriddiv2 from '../assets/images/gridupcomingimg2.png'
import upcomegriddiv3 from '../assets/images/gridupcomingimg3.png'
import upcomegriddiv4 from '../assets/images/gridupcomingimg4.png'
import upcomegriddiv5 from '../assets/images/gridupcomingimg5.png'
import upcomegriddiv6 from '../assets/images/gridupcomingimg6.png'
const UpcomingEvents = () => {
  return (
    <div className="container">
      <div className='eventgrid'>
        <div className='grids'>
          <div className='grid1imgdiv'><img src={upcomegriddiv1} alt="" /></div>
          <h4>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h4>
          <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
        </div>
        <div className='grids'>
            <div className='grid1imgdiv'><img src={upcomegriddiv2} alt="" /></div>
          <h4>2011 Super Junior SM Town Live '10 World Tour New York City</h4>
          <p>Directly seated and inside for you to enjoy the show.</p>
        </div>
        <div className='grids'>
            <div className='grid1imgdiv'><img src={upcomegriddiv3} alt="" /></div>
          <h4>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h4>
          <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
        </div>
        <div className='grids'>
            <div className='grid1imgdiv'><img src={upcomegriddiv4} alt="" /></div>
          <h4>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h4>
          <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
        </div>
        <div className='grids'>
            <div className='grid1imgdiv'><img src={upcomegriddiv5} alt="" /></div>
          <h4>JYJ 2011 JYJ Worldwide Concert Barcelona</h4>
          <p>Directly seated and inside for you to enjoy the show..</p>
        </div>
        <div className='grids'>
            <div className='grid1imgdiv'><img src={upcomegriddiv6} alt="" /></div>
          <h4>2011 Super Junior SM Town Live '10 World Tour New York City</h4>
          <p>Directly seated and inside for you to enjoy the show.</p>
        </div>
      </div>
       <button className='btnleanmore btngrid'>Load More</button>
    </div>
  )
}

export default UpcomingEvents