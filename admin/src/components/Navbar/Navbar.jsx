import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt="" />
        <div>
        <img className='profile' src={assets.mohit_profile} alt="" />
        <p>Mohit</p>
        </div>
    </div>
  )
}

export default Navbar