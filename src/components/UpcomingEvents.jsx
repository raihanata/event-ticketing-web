

import Select from "react-dropdown-select";
import CustomDropdown from './CustomDropdown'
import EventCard from './EventCard'
import { upcomingEvents } from '../data/events'
import { Link } from "react-router-dom";

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
          <div className="container"></div>
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
        {
          upcomingEvents.map(item => <EventCard eventData={item} />)
        }


      </div>
      <button className='btnleanmore btngrid'>Load More</button>
      <Link to='/blog'>Blog</Link>
    </div>
  )
}

export default UpcomingEvents