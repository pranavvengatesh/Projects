import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png' // Assuming you have a logo image in assets
import search_icon from '../../assets/search_icon.svg' // Assuming you have a search icon image in assets
import bell_icon from '../../assets/bell_icon.svg' // Assuming you have a bell icon image in assets
import   profile_icon from '../../assets/profile_img.png' // Assuming you have a profile icon image in assets
import  caret_icon from '../../assets/caret_icon.svg' // Assuming you have a carpet icon image in assets
import { logout } from '../../firebase'
// Navbar component for the Netflix clone application
const Navbar = () => {
const navRef = useRef()
useEffect(()=>{
window.addEventListener('scroll',()=>{
  if(window.scrollY >=80){
    navRef.current.classList.add('nav-dark')
  }else{
        navRef.current.classList.remove('nav-dark')

  }

})
},[])
  
  return (
    <div  ref={navRef} className="navbar">
        <div className="navbar-left">
            <img src={logo} alt="Logo" />
            <ul>
                <li>Home</li>
                <li>Tv shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li> Browse by languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt=""  className='icons'/>
       
       <p>children</p>
       <img src={bell_icon} alt="" className='icons' />
 <div className="navbar-profile">
    <img src={profile_icon} alt=""  className='profile'/>
    <img src={caret_icon} alt="" />
 <div className="dropdown">
    <p onClick={()=>{logout()}}>Signout of Netflix</p>
 </div>
 
 </div>
        </div>
    </div>
  )
}

export default Navbar