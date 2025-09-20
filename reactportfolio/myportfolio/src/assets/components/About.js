import React from 'react'
import Aboutimg from '../about.png'
function About() {
  const config = {
    line1:'Hi,i am MERN-Stack Devleoper. I build beautiful websites with React.js and Tailwindcss',
    line2:'"With a passion for crafting seamless user experiences, I transform ideas into interactive, high-performance web applications"',
    line3:'My expertise in MongoDB, Express.js, React.js, and Node.js enables me to develop dynamic and scalable solutions'
  }
  return (
<section className='flex flex-col md:flex-row bg-secondary px-5' id='About'>
    <div className='md:w-1/2 py-7'>
        <img src={Aboutimg}/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
       
       <div className='flex flex-col justify-center text-white'>
       <h1 className='text-4xl mb-5 text-white border-b-4 w-[175px] border-primary font-bold font-'>About me</h1>
       <p  className='pb-5 font-hero-font '>{config.line1}</p>
       <p className='pb-5 font-hero-font'>{config.line2} </p>
       <p className='pb-5 font-hero-font'>{config.line3}</p>
        </div> 
    </div>
</section>
  )
}

export default About