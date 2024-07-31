import React from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    
    <div className='about-us'>
       <div className='text-about-us'> 
            <h3>
            About Us
                <br />
                <br />
                <br />
                <br />
                
            Hello, Viewers!
                <div className='text'>
                Welcome to Tomato, a full-stack MERN (MongoDB, Express, React, Node.js) website designed to bring you a delightful food 
                experience. Our platform is crafted with love and a passion for great food. Whether you’re here to explore new recipes, find 
                local eateries, or just indulge in your culinary interests, Tomato is your ultimate food companion.
                </div>
                <div className='text'>
                Our team is dedicated to providing you with a seamless and engaging user experience. With Tomato, you can discover a variety 
                of dishes, get inspired by trending recipes, and enjoy the convenience of browsing through our interactive food directory. We 
                strive to make your journey through the world of food as enjoyable and delicious as possible.
                </div>
                <div className='text'>
                Thank you for visiting Tomato. We hope you enjoy your time here and find everything you need to satisfy your taste buds!
                </div>
                <br />
            Happy exploring and eating!!!!!!!..........😊😇
            </h3>
        </div>
        <div className='logo-about-us'>
            {/* <img src={assets.logo} alt="" /> */}
            <h1>Tomato.</h1>
        </div>
    </div> 
  )
}

export default AboutUs