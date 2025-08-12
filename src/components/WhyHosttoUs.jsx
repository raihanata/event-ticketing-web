import React from 'react'
import { whyHostvalues } from '../data/whyhost'
import WhyHostCard from './WhyHostCard'

const WhyHosttoUs = () => {

  return (

    <section>
      <div className='container whytohost'>
        <h2>Why to host your next event with us? </h2>
        <div className='whyhostGrid'>
          {
            whyHostvalues.map((item, idx) => <WhyHostCard whyhostData={item} key={idx} />)
          }

        </div>
        <div className='button-whytohost'><button>Contact Now</button></div>
      </div>
    </section>
  )
}

export default WhyHosttoUs