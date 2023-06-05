import Navbar from '../components/Navbar'
import '../app/globals.css'
import Image from 'next/image'
import React from 'react'
import img from '../public/assets/projects/noblecanni.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'



const noblecanni = () => {
  return (

    
    <><div>
      <Navbar />

    </div>
    
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={img} alt='/' />
            
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2> Canni</h2>
              <h3>Web Development Internship</h3>
            </div>

          </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
              <h2 className='mb-5'>Project Overview</h2>
              <p>During my web development internship at NobleCanni, I played an important role in completely redesigning their website, resulting in a significant improvement in its visual appeal and user experience. Working closely with the CEO and the developer team, I revitalized various sections, incorporating modern design elements and intuitive interfaces. Through meticulous attention to detail and rigorous testing, I ensured the website was not only aesthetically pleasing but also optimized for performance and accessibility.</p>
              <p className='pt-3'>The successful redesign received positive feedback, showcasing NobleCanni's brand identity more effectively and enhancing user engagement. This internship allowed me to enhance my skills in web design, front-end development, and project management while emphasizing the importance of delivering an exceptional user experience.</p>


              <a href='https://noblecanni.com/' alt='/' target='_blank'>
                <button className='px-8 py-2 mt-4 mr-8'> Current Site</button>
              </a>
              
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='p-2'>
                
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> WordPress
                  </p>

                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> HTML
                  </p>

                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> CSS
                  </p>

                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> JavaScript
                  </p>
                </div>

              </div>
            </div>
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
            
          </div>

      </div></>

  
  )
}

export default noblecanni