import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
    const[sticky,setsticky] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 560 ? setsticky(true): setsticky(false)
        })
    },[])
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu= ()=>{ 
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);  
    }
  return (
  <nav className={` container ${sticky? 'dark-nav' :'' }`}>
    <img src={logo} alt="Logo" className='logo' />
    <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to="programs" smooth={true} duration={500} offset={-260}>Program</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-150}>About us</Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-210}>Campus</Link></li>
        <li><Link to="testimonial" smooth={true} duration={500} offset={-260}>Testimonial</Link></li>
        <li> <button className='btn'><Link to="contact" smooth={true} duration={500} offset={-210}>Contact us</Link></button></li>
    </ul>
    <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
  </nav>
  )
}

export default Navbar