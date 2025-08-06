import React from 'react'

const BlogEvent = ({ blogData }) => {
    return (
        <div className='image-main'>
            <div className='hall'><img src={blogData.image} alt='' />  </div>
            <div>
                <h3 className='h3-div'>{blogData.title}<br />Speakers</h3>
            </div>
            <div >
                <p>
                    {blogData.description}
                </p>
            </div>
            <div>
                <span className='doe'>
                    {`${blogData.date.month} ${blogData.date.day}`}
                </span>
            </div>
        </div>
    )
}

export default BlogEvent