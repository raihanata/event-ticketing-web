import React from 'react'
import './Searchbar.css'
const searchbar = () => {
  return (
<div className='container'>
<div className='div-search'>
   <div className="search-container">
  <input
    type="text"
    id="search-input"
    className="search-input"
    placeholder="Search..."
  />
 
  </div>
    <div className="filter-wrapper">
     <button className="filter-button">Filter</button>
     <div className="filter-content">
        <label className="filter-option"><input type="radio" /> Cities</label>
        <label className="filter-option"><input type="radio" /> Events</label>
        <label className="filter-option"><input type="radio" /> Dates</label>
        <label className="filter-option"><input type="radio" /> Blogs</label>
     </div>
    </div>



</div>
</div>
  )
}

export default searchbar
