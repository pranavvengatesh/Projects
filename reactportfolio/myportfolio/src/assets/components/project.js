import React from 'react'
import Ecommerce from '../ecommerce-websites.jpg'
import  Food from '../food-ecommerce.jpg'
import Blog from '../website-blog.jpg'
function Project() {
  const config = {
    Projects :[
      {
        image: Ecommerce,
        description:'Ecommerce Website ,Built with React.Js',
        link:'https://github.com/pranavvengatesh/LEASE-MANAGEMENT'
      },
      {
        image:Food,
        description:'Food Ecommerce Website like swiggy,Built with React.Js',
        link:'https://github.com/pranavvengatesh/LEASE-MANAGEMENT'
      },
      {
        image:Blog,
        description:' Blog Website, Built with React.Js,MongoDB',
        link:'https://github.com/pranavvengatesh/LEASE-MANAGEMENT'
      },
    ]
  }
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='Projects'>
         <div className='w-full'>
         <div className='flex flex-col px-10 py-5'>
         <h1 className='text-4xl mb-5 text-white border-b-4 w-[140px] border-secondary font-bold '>
            Projects
            </h1>
            <p>These are some of my best projects, I have built these with MERN and Tailwind CSS,Check them out</p>
         </div>
         
            </div>
         <div className='w-full'>
         <div className='flex flex-col md:flex-row px-10 gap-5'>
         {config.Projects.map((Project) => ( <div className='relative'>
          <img className='h-[250px] w-[500px]'  src={Project.image}/>
          <div className='absolute h-[250px] left-0 right-0 bottom-[0px] top-0 bg-secondary opacity-0 duration-500  hover:opacity-100'>
            <p className='text-center px-5 py-5'>{Project.description}</p>
            <div className='flex justify-center'>
            <a target='_blank' href={Project.link} className='btn '>View Project</a>
            </div> 
            </div>
           
            </div>))}
        
         </div>
         </div>
    </section>
   
  )
}

export default Project