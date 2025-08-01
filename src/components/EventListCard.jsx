import React, { useEffect } from 'react'

const EventListCard = ({ eventListData }) => {
     useEffect(()=> {
        console.log(eventListData, 'event list data')
      }, [eventListData])
        
  return (
     <div className='Cards-event-list'>
                        <div className='gridimgDiv'>
                            <img src={eventListData.image} alt="" />
                        </div>
                        <div style={{ paddingLeft: '15px',paddingRight:'10px',fontSize:'15px' }}>
                            <h4>{eventListData.title}</h4>
                            <div><i><img src="/icons/calendar-due.svg" alt="" /></i><label htmlFor="">{eventListData.date.from}-{eventListData.date.to} </label></div>
                          <div>  <i><img src="/icons/clock-hour-4.svg" alt="" /></i><label htmlFor="">{eventListData.time} </label></div>
                           <div> <i><img src="/icons/map-pin.svg" alt="" /></i><label htmlFor=""> {eventListData.place}</label></div>
                            <div className='flexlastgrid'>
                                <div ><label htmlFor="">₹</label><label htmlFor="">{eventListData.price}</label></div>
                                <div><label htmlFor="">Book Now</label></div>
                            </div>
                        </div>
                    </div>
  )
}

export default EventListCard