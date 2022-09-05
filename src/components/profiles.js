import React from 'react'

export default function profiles() {
  return (
    <div id="profile">
      {Item()}
    </div>
  )
}

function Item() {
  return(
    <div className="flex">
      <div className="item">
        <img src="" alt=""/>

        <div className="info">
          <h3 className='name text-dark'>Name</h3>
          <span>Location</span>
        </div>
        <div className="item"></div>
        <span>Score</span>
      </div>
    </div>
  )
}