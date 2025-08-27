import React from 'react'
import './speaker.css'
import HeaderTwo from '../components/HeaderTwo'
import { speaker, } from '../data/speaker'
import SpeakerCard from '../components/SpeakerCard'

const Speaker = () => {
  return ( 
    <>
    <HeaderTwo/>
    <div className='container'>
      <div className="grid-container">
      {
      speaker.map((item, idx)=><SpeakerCard  speakerData={item} key={idx}/>)
      }
     </div>
    </div>
      
    </>
  )
}

export default Speaker