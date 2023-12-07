import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Header'>
        <div className='logo'>
            <h2></h2>
        </div>
        <div className='navItem'>
            <ul className='navItem-ul'>
                <li className='nav-li'>Home</li>
                <li className='nav-li'>About us </li>
                <li className='nav-li'>Portfolio</li>
                <li className='nav-li'>Work</li>
                <li className='nav-li'>Contact</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Navbar
