import Image from 'next/image';
import React from 'react';
import '../app/globals.css'
import postImg from '/public/assets/projects/postiflydetails.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Navbar from "../components/Navbar";



const postifly = () => {
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
                src={postImg}
                alt='/'
               />
                
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                  <h2>Postifly</h2>
                  <h3>Personal Full-Stack Project</h3>
                </div>
    
              </div>
    
              <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                  <h2 className='mb-5'>Project Overview</h2>
                  <p>Postifly is a dynamic and engaging web application that I developed as a personal project to expand my full-stack development skills. This app incorporates secure sign-in authentication and offers users the ability to create and interact with posts. Users can share their thoughts, which are then showcased prominently, and they can also engage with the content by liking and commenting on posts. Postifly highlights my capability to design an appealing front-end interface while effectively managing data and functionality in the backend.</p>
    
    
                  <a href='https://postifly.vercel.app/' alt='/' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>Postifly</button>
                  </a>

                  <a href='https://github.com/aijaza1/postitapp' alt='/' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>Source Code</button>
                  </a>
                  
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                  <div className='p-2'>
                    
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> NextJS
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> React
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> TailwindCSS
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Typescript
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Prisma
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> PostgreSQL
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Github
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Vercel
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> VS Code
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
};

export default postifly;