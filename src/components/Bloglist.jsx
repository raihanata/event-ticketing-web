import React from 'react'
import BlogEvent from './BlogEvent'
import { blogs } from '../data/blog'
import './Blog.css'

const Bloglist = () => {

  return (
  <div className='container'>
    
   <div div className='image-main div-image' style={{marginTop:'20px'}}>
    {
        blogs.map(item=> <BlogEvent blogData={item}/>)
    }        
    </div>
  </div>
  )
}

export default Bloglist