import React, { useEffect } from 'react'

const SpeakerCard = ({speakerData}) => {
    useEffect(()=>{
        console.log[speakerData,"speakerData"]
    },[speakerData])
  return (
    
    <div className="speaker">
      <div className="speaker-card">
        <div className="speaker-image">
          <img
            src={speakerData.image}
            alt="Sarah Johnson"
          />
        </div>
        <div className="speaker-info">
          <h3 className="speaker-name"> {speakerData.name}</h3>
          <p className="speaker-title">{speakerData.title}</p>
          <p className="speaker-bio">
            {speakerData.bio}
          </p>
          <div className="speaker-expertise">
            <span className="expertise-tag">{speakerData.expertise}</span>
            <span className="expertise-tag">{speakerData.expertise}</span>
            <span className="expertise-tag">{speakerData.expertise}</span>
          </div>
          
        </div>
      </div> 
      </div>
    
  )
}

export default SpeakerCard