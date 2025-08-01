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
        <label class="filter-option"><input type="checkbox" /> Cities</label>
        <label class="filter-option"><input type="checkbox" /> Events</label>
        <label class="filter-option"><input type="checkbox" /> Dates</label>
        <label class="filter-option"><input type="checkbox" /> Blogs</label>
     </div>
    </div>



</div>
</div>
  )
}

export default searchbar
