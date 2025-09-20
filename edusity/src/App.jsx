import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Tittle from './Components/Tittle/Tittle.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonial from './Components/Testimonials/Testimonial.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer.jsx'
function App() {
 const  [playState,setPlayState] = useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Tittle subtitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Tittle subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
       <Tittle subtitle='TESTIMONIALS' title='What Our Students Say'/>
    <Testimonial/>
       <Tittle subtitle='Contact us' title='Get in Touch'/>
       <Contact/>
<Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App