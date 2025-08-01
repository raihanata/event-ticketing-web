import React from 'react'
import { eventlist } from '../data/eventlist'
import EventListCard from './EventListCard'

const EventList = () => {
    return (
        <section style={{ minHeight: '1000px' }}>
            <div className="container">
                <div className='eventListGrid'>
                 {
                    eventlist.map((item, idx)=><EventListCard eventListData={item} key={idx}/>)
                 }
                   

                </div>
            </div>
        </section>
    )
}

export default EventList