import React from 'react'
import Resumeimg from '../resume.jpg'
function Resume() {
  return (
<section className='flex flex-col md:flex-row bg-secondary px-5' id='Resume'>
    <div className='md:w-1/2 py-7 flex justify-center md:justify-end'>
        <img className='w-[300px]' src={Resumeimg}/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
       
       <div className='flex flex-col justify-center text-white'>
       <h1 className='text-4xl mb-5 text-white border-b-4 w-[140px] border-primary font-bold font-'>Resume</h1>
       <p  className='pb-5'>you can view my resume <a href='/pranavres_resume 2.pdf' target="_blank" className='btn'>View Resume</a></p>
        </div> 
    </div>
</section>
  )
}

export default Resume