import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({ setPlayState }) => {
  return (
    <div className='about'>
     <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayState(true)}/>

     </div>
     <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
            We're all about shaping tomorrow's leaders—starting right now. Bold ideas and real-world skills are at the heart of everything we do. 
            Learning here means leveling up your future and breaking new ground.
             Innovation and creativity drive our community every day.
        </p>
        <p>
            Our faculty are industry pros who push you beyond limits and inspire growth. With cutting-edge programs and hands-on experiences, you’ll gain the tools to crush your goals.
             We combine passion with opportunity to help you thrive. 
             This is where your journey really begins.
         </p>
         <p>
            Leadership here isn’t just a buzzword; it’s a way of life. 
            Internships, mentorships, and community projects build skills that make a real impact. 
            You'll join a network of changemakers ready to lead with purpose.
             Ready to step up and make your mark?
         </p>
     </div>
     </div>
  )
}

export default About