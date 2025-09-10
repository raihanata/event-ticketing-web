import React, { memo } from 'react'

const SpeakerCard = memo(({speakerData}) => {


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
            <span className="expertise-tag">{speakerData.expertise.ai}</span>
            <span className="expertise-tag">{speakerData.expertise.Leadership}</span>
            <span className="expertise-tag">{speakerData.expertise.Innovation}</span>
          </div>
          
        </div>
      </div> 
      </div>
    
  )
})

export default SpeakerCard