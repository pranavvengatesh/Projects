import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_tittle from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png' 
import info_icon from '../../assets/info_icon.png' // Assuming you have an info icon image in assets
import TittleCards from '../../components/TittleCards/TittleCards'
import Footer from '../../components/Footer/Footer'
// Assuming you have a play icon image in assets
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
            <img src={hero_tittle} alt="" className='caption-img' />
            <p>
                Discovering his ties to a secret ancient order, a young man living in modern 
                Istanbul embarks on an epic adventure to save the city from a sinister plot.
            </p>
            <div className="hero-btns">
                <button className='btn'>
                    <img src={play_icon} alt="" />Play
                </button>
                <button  className='btn dark-btn'>
                    <img  src={info_icon} alt="" />More Info
                </button>
            </div>
            <TittleCards/>
        </div>

      </div>
      <div className="more-cards">
        <TittleCards tittle={"Blockbuster Movies"} category={"top_rated"}/>
        <TittleCards tittle={"Only on Netflix"} category={"popular"}/>
        <TittleCards tittle={"Upcoming"} category={"upcoming"}/>
        <TittleCards tittle={"Top Pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home