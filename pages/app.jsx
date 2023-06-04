import Navbar from '../components/Navbar'
import '../app/globals.css'
import Image from 'next/image'
import React from 'react'
import img from '../public/assets/projects/vcuapp.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'



const app = () => {
  return (

    
    <><div>
      <Navbar />

    </div>
    
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={img} alt='/' />
            
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2>VCU App Redesign</h2>
              <h3>Team Project</h3>
            </div>

          </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
              <h2 className='mb-5'>Project Overview</h2>
              <p>In my web design class, as a team, we redesigned our school's app's (VCU) lackluster UX/UI designs using Figma. Through collaborative efforts on Discord, we created a comprehensive mock-up with intuitive navigation and modern aesthetics. We refined the design, and strengthened our UX/UI and teamwork skills. The result was a visually appealing and engaging app redesign.</p>

              <a href='https://www.figma.com/file/xWX7X03O0Y6B6UgdvO5BuO/VCU-Super-App?type=design&node-id=0%3A1&t=OXsDfCwZWpn9mbB8-1' alt='/' target='_blank'>
                <button className='px-8 py-2 mt-4 mr-8'>Link</button>
              </a>
              
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='p-2'>
                
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> Figma
                  </p>

                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> Discord
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

export default app