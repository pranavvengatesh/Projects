import React from 'react'
import Heroimg from '../hero.png'
import { AiOutlineTwitter ,  AiOutlineGithub, AiOutlineLinkedin} from "react-icons/ai";
import { TbWalk } from 'react-icons/tb';

function Hero() {
  const config = {
    subtitle :'MERN-Stack Devleoper and a UI/UX designer',
    social:{
      Twitter:'https://twitter.com/PranavVengatesh',
      Github:'https://github.com/pranavvengatesh',
      linkedin:'https://www.linkedin.com/in/pranav-vengatesh-0b1a1b1b6/'
    }
  }
  return (
   <section className='flex flex-col md:flex-row px-10  py-32 bg-primary justify-center'>
   <div  className='md:w-1/2 flex flex-col'>
   <h1 className=' text-white text-4xl font-hero-font '>   Hi ,<br/> Im <span className='text-black'>Pranav</span> Vengatesh
        <p className='text-2xl'> {config.subtitle}</p>
    </h1>
    <div className='flex py-8 '>
        <a target='_blank' href={config.social.Twitter} className='pr-5 hover:text-white' ><AiOutlineTwitter size={30}/></a>
        <a target='_blank' href={config.social.Github} className='pr-5  hover:text-white' ><AiOutlineGithub size={30}/></a>
        <a target='_blank' href={config.social.linkedin}  className=' hover:text-white'><AiOutlineLinkedin size={30}/></a>
    </div>
    </div> 
    <img className='md:w-1/3 ' src={Heroimg}/>
   </section>
  )
}

export default Hero