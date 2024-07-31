import React, { useState } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

    const [menu,setMenu] = useState("footer");

    const navigate = useNavigate()

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                 <p>
                    A vibrant online platform that brings together food enthusiasts and culinary creations. At Tomato, we offer a diverse 
                    selection of delicious recipes, local eateries, and dining experiences. Whether you're looking for the perfect recipe to 
                    try at home or seeking out new restaurants to explore, Tomato is your go-to resource for all things food. Discover, savor, 
                    and share the joy of eating with Tomato.
                 </p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutus'>About us</Link></li>
                    <li><Link to='/privacypolicy'>Privacy policy</Link></li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8923742612</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copy'>Copyright 2024 © Tomato.com |mohit@mch| - All Right Reserved.</p>
    </div>
  )
}

export default Footer