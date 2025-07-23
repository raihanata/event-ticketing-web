import React from 'react'
import makeEventimg from '../assets/images/maheeventimg.png'
const MakeEvent = () => {
  return (
    <section className='makeevent'>
        <div className="container flexdiv">
          <div className='makeEventleft'><img src={makeEventimg} alt="" /></div>
          <div  className='makeEventright'>
            <h3>Make your own Event </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <button className='btnleanmore btnmakeevent'>Create Events</button>
          </div>
        </div>
    </section>
  )
}

export default MakeEvent