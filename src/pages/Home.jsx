import React from 'react'
import Banner from '../components/Banner'
import UpcomingEvents from '../components/UpcomingEvents'

import SearchEvent from '../components/SearchEvent'
import MakeEvent from '../components/MakeEvent'

const Home = () => {
  return (
    <>
      <Banner />
      <SearchEvent />
      <UpcomingEvents />
      <MakeEvent/>
    </>
  )
}

export default Home