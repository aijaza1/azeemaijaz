import Navbar from '../app/components/Navbar'
import '../app/globals.css'
import Image from 'next/image'
import React from 'react'
import img from '../public/assets/projects/shell.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'



const shell = () => {
  return (

    
    <><div>
      <Navbar />

    </div>
    
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={img} alt='/' />
            
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2>Custom Bash Shell</h2>
            </div>

          </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
              <h2 className='mb-5'>Project Overview</h2>
              <p>I developed a custom shell program in C, where I implemented a range of built-in commands to enhance the functionality of the shell. These commands included functionalities such as printing the process ID (pid) and the parent process ID (ppid) of the shell. Additionally, I implemented commands to handle changing the current working directory (cd), exiting the shell (exit), and providing helpful information about using the shell (help). This project showcased my ability to create and integrate custom commands into a command-line program, expanding its capabilities and usability.</p>

              <a href='https://github.com/aijaza1/CustomShell' alt='/' target='_blank'>
                <button className='px-8 py-2 mt-4 mr-8'>Source Code</button>
              </a>
              
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='p-2'>
                
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> C
                  </p>

                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> Linux
                  </p>

                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> Command Line
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

export default shell