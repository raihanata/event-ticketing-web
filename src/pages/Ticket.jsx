import React from 'react'
import '../components/ticket.css'
import BanetTicket from '../components/BanetTicket'
import SiteStatus from '../components/SiteStatus'
import MobileApp from '../components/MobileApp'
const Ticket = () => {
  return (
    <>
    <BanetTicket/>
     <SiteStatus/>
     <MobileApp/>
    </>
  )
}

export default Ticket