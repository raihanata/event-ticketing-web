import React from 'react'
import '../components/ticket.css'
import BanetTicket from '../components/BanetTicket'
import SiteStatus from '../components/SiteStatus'
import MobileApp from '../components/MobileApp'
import EventList from '../components/EventList'
import HeaderTwo from '../components/HeaderTwo'
import WhyHosttoUs from '../components/WhyHosttoUs'

import Searchbar from '../components/Search bar'


const Ticket = () => {
  

  return (
    <>
    <HeaderTwo/>
     <Searchbar/>
    <BanetTicket/>
     <EventList/>
     <SiteStatus/>
     {/* <MobileApp/> */}
     <WhyHosttoUs />
    </>
  )
}

export default Ticket