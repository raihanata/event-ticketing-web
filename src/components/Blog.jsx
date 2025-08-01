import React from 'react'
import './Blog.css';
import BlogEvent from './BlogEvent';
import { blogs } from '../data/blog';
import { useNavigate } from 'react-router-dom';


export const Blog = () => {
  const navigate = useNavigate();

      const handleClick = () => {
        navigate('blog/'); 
      };

  return (
    <section id='Blog'>
        <div className='container'>
             <div className='blog div'>
               <div className='div-head'>
                <h2 className='heading'>Blog</h2>
               </div>
               <div>
                <p className='p-lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

            <div className='div-image'>
                {
                blogs.map(item=>   <BlogEvent blogData={item}/>)
                 }

                
            </div>

                <div className='learn'>
                    <button className='more' onClick={handleClick }>Load More</button>

                </div>








        </div> 
    </div>

</section>
  )
}
export default Blog