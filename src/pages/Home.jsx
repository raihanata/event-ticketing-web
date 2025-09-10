import React from 'react'
import Banner from '../components/Banner'
import UpcomingEvents from '../components/UpcomingEvents'

import SearchEvent from '../components/SearchEvent'
import MakeEvent from '../components/MakeEvent'
import Blog from '../components/Blog'
import Brand from '../components/Brand'

const Home = () => {

  return (
    <>
      <Banner />
      <SearchEvent />
      <UpcomingEvents />
      <MakeEvent/>
      <Brand/>
      <Blog/>  
    </>
  )
}

export default Home