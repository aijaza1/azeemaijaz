{/* 

import Navbar from '../components/Navbar'
import '../app/globals.css'
import Image from 'next/image'
import React from 'react'
import img from '../public/assets/projects/brightminds.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'



const brightminds = () => {
  return (

    
    <><div>
      <Navbar />

    </div>
    
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            
            <Image 
                className='absolute z-1' 
                layout='fill' 
                objectFit='cover' 
                src={img} 
                alt='/' 
            />
            
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2>Bright Minds Website</h2>
            </div>

          </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
              <h2 className='mb-3'>Project Overview</h2>
              <p>In my Web Design class, I created a website for Bright Minds, a non-profit organization in Richmond. The website focused on promoting their chess classes and tournaments for youth, highlighting the transferable life skills developed through chess. By following the organization's guidelines, I designed an engaging and user-friendly website that effectively communicated their mission. The project allowed me to apply my web design skills to support a non-profit and contribute to their efforts of empowering young individuals through chess education.</p>

              <a href='https://andrewilnicki.com/mu/azeem/' alt='/' target='_blank'>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
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

export default brightminds


*/}