import React from 'react'
import Banner from '../components/Banner'
import UpcomingEvents from '../components/UpcomingEvents'
import MakeYourEvent from '../components/MakeYourEvent'
import SearchEvent from '../components/SearchEvent'

const Home = () => {
  return (
    <>
    <Banner/>
    <SearchEvent/>
    <UpcomingEvents/>
    {/* <MakeYourEvent/> */}
    </>
  )
}

export default Home