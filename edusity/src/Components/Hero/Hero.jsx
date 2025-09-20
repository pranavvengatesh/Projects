import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>
                We Ensure better eduction  for a better Future
            </h1>
            <p>Shaping futures starts with smarter learning.
                We blend innovation, passion, and purpose to redefine education.
                Better education today, for the future you deserve.</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt=""  /></button>
        </div>

    </div>
  )
}

export default Hero