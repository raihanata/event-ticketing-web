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
                whyHostvalues.map(item=><WhyHostCard whyhostData={item} />)
            }
         {/* <div className='whyhostcards'>
          <div className='whytohoostimgDiv'><img src="/images/ticketpage/whytihostimg1.png" alt="" /></div>
          <h5>Enhance User Experience Engagement</h5>
          <p>Hosting your event with us will not only bring you a great footfall but we promise your attendees a great experience on our platform which has features that compliment each other.</p>
         </div>
          <div className='whyhostcards'>
           <div className='whytohoostimgDiv'><img src="public/images/ticketpage/whytohostimg2.png" alt="" /></div>
          <h5>Enhance User Experience Engagement</h5>
          <p>Hosting your event with us will not only bring you a great footfall but we promise your attendees a great experience on our platform which has features that compliment each other.</p>
          </div>
           <div className='whyhostcards'>
           <div className='whytohoostimgDiv'><img src="public/images/ticketpage/whytohostimg3.png" alt="" /></div>
          <h5>Enhance User Experience Engagement</h5>
          <p>Hosting your event with us will not only bring you a great footfall but we promise your attendees a great experience on our platform which has features that compliment each other.</p>
           </div> */}
        </div>
        <div className='button-whytohost'><button>Contact Now</button></div>
    </div>
    </section>
  )
}

export default WhyHosttoUs