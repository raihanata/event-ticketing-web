import { useEffect } from "react"


const EventCard = ({ eventData }) => {

  useEffect(()=> {
    console.log(eventData, 'event data')
  }, [eventData])
    
  return (
    <div className='grids'>
        <div className='grid1imgdiv'><img src={eventData.image} alt="" /></div>
        <div className='griddatecontainer'>
        <div className='gridDate'>
            <h6>{eventData.date.month}</h6>
            <h5>{eventData.date.day}</h5>
        </div>
        <h4>{eventData.title}</h4>
        </div>
        <p>{eventData.description}</p>
    </div>
  )
}

export default EventCard