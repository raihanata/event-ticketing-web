import React, { useEffect, useState } from 'react'
import './speaker.css'
import HeaderTwo from '../components/HeaderTwo'
import SpeakerCard from '../components/SpeakerCard'
import axios from 'axios'

const Speaker = () => {

  const [speakerList, setSpeakerList] = useState([])

  const fetchSpeakers = async () => {

    await axios.get('http://localhost:8000/cms/speakers').then(res=> {
      console.log(res.data.data)
      setSpeakerList(res.data.data)
    }).catch(err=> {
      console.log(err.message)
    })
  }

  useEffect(()=> {
    fetchSpeakers()
  }, [])

  return ( 
    <>
    <HeaderTwo/>
    <div className='container'>
      <div className="grid-container">
      {
      speakerList.map((item, idx)=><SpeakerCard  speakerData={item} key={idx}/>)
      }
     </div>
    </div>
      
    </>
  )
}

export default Speaker