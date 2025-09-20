import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header(){
  const [togglemenu,settogglemenu]=  useState(false);
  return (
<header className='flex justify-between px-5 py-3 bg-secondary' >
    <a href="#home" className="logo font-bold text-black text-xl">Pranav <span className='text-white'>Vengatesh</span> </a>
    <nav className='hidden md:block'>
    <ul className='flex text-white '>
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Resume">Resume</a></li>
        <li><a href="#Contact">Contact</a></li>
    </ul>
    </nav>
   {togglemenu && <nav className='blocl md:hidden '>
    <ul onClick={()=>settogglemenu(!togglemenu)} className='flex flex-col text-white mobile-nav'>
        <li><a href="#home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
    </ul>
    </nav>
}
    <button onClick={()=>settogglemenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
  
</header>  )
}

export default Header