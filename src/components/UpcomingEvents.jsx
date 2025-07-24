import React from 'react'
import upcomegriddiv1 from '../assets/images/gridupcomingimg1.png'
import upcomegriddiv2 from '../assets/images/gridupcomingimg2.png'
import upcomegriddiv3 from '../assets/images/gridupcomingimg3.png'
import upcomegriddiv4 from '../assets/images/gridupcomingimg4.png'
import upcomegriddiv5 from '../assets/images/gridupcomingimg5.png'
import upcomegriddiv6 from '../assets/images/gridupcomingimg6.png'

import Select from "react-dropdown-select";
import CustomDropdown from './CustomDropdown'

// import { Dropdown } from 'primereact/dropdown';


const dateOptions = [
  {
    value: 'weekdays',
    label: 'Weekdays'
  },
  {
    value: 'weekends',
    label: 'Weekend'
  }
];

const eventTypeOptions = [
  {
    value: 'offline',
    label: 'Offline'
  },
  {
    value: 'online',
    label: 'Online'
  }
];
const catogoryTypeOption = [
  {
    value: 'offstage',
    label: 'offstage'
  },
  {
    value: 'onstage',
    label: 'onstage'
  }
];

const UpcomingEvents = () => {


  return (
    <div className="container upcoming">
      <div className='topsecgrid'>
        <div className='gridTopP'>   <p>Upcoming Events</p></div>
        <div>
          {/* <CustomDropdown options={eventTypeOptions} onChange={()=> {console.log('f')}}/> */}
          <Select
            options={dateOptions}
            onChange={(values) => this.setValues(values)}
            className='custom-dropdownGrid'
          />
        </div>
        <div>
          <Select
            options={eventTypeOptions}
            onChange={(values) => this.setValues(values)}
            className='custom-dropdownGrid'
          />
        </div>
        <div>
          <Select
            options={catogoryTypeOption}
            onChange={(values) => this.setValues(values)}
            className='custom-dropdownGrid'
          />
        </div>
      </div>
      <div className='eventgrid'>
        <div className='grids'>
          <div className='grid1imgdiv'><img src={upcomegriddiv1} alt="" /></div>
          <div className='griddatecontainer'>
            <div className='gridDate'>
              <h6>APR</h6>
              <h5>14</h5>
            </div>
            <h4>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h4>
          </div>
          <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
        </div>
        <div className='grids'>
          <div className='grid1imgdiv'><img src={upcomegriddiv2} alt="" /></div>
          <div className='griddatecontainer'>
            <div className='gridDate'>
              <h6>APR</h6>
              <h5>14</h5>
            </div>
            <h4>2011 Super Junior SM Town Live '10 World Tour New York City</h4>
          </div>
          <p>Directly seated and inside for you to enjoy the show.</p>
        </div>
        <div className='grids'>
          <div className='grid1imgdiv'><img src={upcomegriddiv3} alt="" /></div>
          <div className='griddatecontainer'>
            <div className='gridDate'>
              <h6>APR</h6>
              <h5>14</h5>
            </div>
            <h4>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h4>
          </div>
          <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
        </div>
        <div className='grids'>
          <div className='grid1imgdiv'><img src={upcomegriddiv4} alt="" /></div>
          <div className='griddatecontainer'>
            <div className='gridDate'>
              <h6>APR</h6>
              <h5>14</h5>
            </div>
            <h4>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h4>
          </div>
          <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
        </div>
        <div className='grids'>
          <div className='grid1imgdiv'><img src={upcomegriddiv5} alt="" /></div>
          <div className='griddatecontainer'>
            <div className='gridDate'>
              <h6>APR</h6>
              <h5>14</h5>
            </div>
            <h4>JYJ 2011 JYJ Worldwide Concert Barcelona</h4>
          </div>
          <p>Directly seated and inside for you to enjoy the show..</p>
        </div>
        <div className='grids'>
          <div className='grid1imgdiv'><img src={upcomegriddiv6} alt="" /></div>
          <div className='griddatecontainer'>
            <div className='gridDate'>
              <h6>APR</h6>
              <h5>14</h5>
            </div>
            <h4>2011 Super Junior SM Town Live '10 World Tour New York City</h4>
          </div>
          <p>Directly seated and inside for you to enjoy the show.</p>
        </div>
      </div>
      <button className='btnleanmore btngrid'>Load More</button>
    </div>
  )
}

export default UpcomingEvents