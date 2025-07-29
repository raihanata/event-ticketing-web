

const EventCard = ({ eventData }) => {
    
  return (
    <div className='grids'>
        <div className='grid1imgdiv'><img src={eventData.image} alt="" /></div>
        <div className='griddatecontainer'>
        <div className='gridDate'>
            <h6>APR</h6>
            <h5>14</h5>
        </div>
        <h4>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h4>
        </div>
        <p>We’ll get you directly seated and inside for you to enjoy the show.</p>
    </div>
  ) 
}

export default EventCard