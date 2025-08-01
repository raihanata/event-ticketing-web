import React from 'react'
import BlogEvent from './BlogEvent'
import { blogs } from '../data/blog'
import './Blog.css'
import './Bloglist.css'
const Bloglist = () => {

  return (
  <div className='container'>
    
   <div className='div-bloglist image-main div-image' >
    {
        blogs.map(item=> <BlogEvent blogData={item}/>)
    }        
    </div>
  </div>
  )
}

export default Bloglist