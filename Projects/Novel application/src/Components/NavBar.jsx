import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="top">
      <div className="topleft">
        <i className='bx bxl-facebook-square'></i>
        <i className='bx bxl-linkedin-square'></i>
        <i className='bx bxl-instagram-alt'></i>
        <i className='bx bxl-pinterest'></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">Home</li>
          <li className="toplistitem">ABOUT</li>
          <li className="toplistitem">CONTACT</li>
          <li className="toplistitem">WRITE</li>
          <li className="toplistitem">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img src="" alt="" className="topimg" />
        <i className='bx bx-search'></i>
      </div>
    </div>
  )
}

export default NavBar