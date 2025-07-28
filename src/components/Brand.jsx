import React from 'react'
import './Brand.css';

export const Brand
 = () => {
  return (
    <section>
        <div className='container'>
          <div>
            <h2 className='head'>Join these brands</h2>
            <p className='subhead'>We've had the pleasure of working with industry-defining brands. These <br /> are just some of them.</p>
          </div>

        <div className='brand-logos'>
            <div><img src="src/assets/images/spotify svg.svg" alt="spotify"  className='logo'/></div>
            <div><img src="src/assets/images/stripe svg.svg" alt="stripe"  className='logo'/></div>
            <div><img src="src/assets/images/you tube svg.svg" alt="you tube" className='logo' /></div>
            <div><img src="src/assets/images/microsoft svg.svg" alt="microsoft"  className='logo'/></div>
            <div><img src="src/assets/images/mediumsvg.svg" alt="medium"       className='logo'/></div>
            <div><img src="src/assets/images/zoomsvg.svg" alt="zoom"            className='logo'/></div>
            <div><img src="src/assets/images/ubersvg.svg" alt="uber"             className='logo'/></div>
            <div><img src="src/assets/images/grab svg.svg" alt="grab"           className='logo' /></div>
        </div>


      </div>
  </section>
  )
}
export default Brand