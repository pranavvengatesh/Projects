import React from 'react'
import Resumeimg from '../resume.jpg'
function Contact() {
  const config = {
    email:'pranavvengatesh191103@gamil.com',
    phone:'6381745886'
  }
  return (
<section className='flex flex-col bg-primary px-5 py-32 text-white' id='Contact'>

    <div className=' flex  flex-col items-center'>
       
       <h1 className='text-4xl mb-5 border-b-4 w-[140px] border-secondary font-bold font-'>Contact</h1>
       <p  className='pb-5  text-white text-lg '>If you want to discuss more in detail please contact me </p>
       <p className='py-2'><span className='font-bold'> Email :</span>{config.email}</p>
       <p className='py-2'><span className='font-bold'> Phone :</span>{config.phone}</p>
        </div> 
 
</section>
  )
}

export default Contact