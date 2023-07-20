import Image from 'next/image';
import React from 'react';
import '../app/globals.css'
import comfortImg from '/public/assets/projects/comfortcaloriesc.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Navbar from "../components/Navbar";



const comfort = () => {
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
          src={comfortImg}
          alt='/'
        />
                
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                  <h2>Comfort Calorie</h2>
                  <h3>Personal Project</h3>
                </div>
    
              </div>
    
              <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                  <h2 className='mb-5'>Project Overview</h2>
                  <p>Comfort Calorie is a responsive and user-friendly personal project designed to assist users with daily calorie intake tracking. The tool allows users to effortlessly calculate their required calorie intake based on individual goals, providing valuable insights for health and fitness. Leveraging an integrated API, Comfort Calorie enables users to search for any food and access comprehensive nutritional facts, including a calorie breakdown presented through an interactive pie chart. With its intuitive interface and robust features, Comfort Calorie empowers users to make informed dietary choices and achieve their health objectives.</p>
    
    
                  <a href='https://comfort-calorie.vercel.app/' alt='/' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>Comfort Calorie</button>
                  </a>

                  <a href='https://github.com/aijaza1/ComfortCalorie' alt='/' target='_blank'>
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

export default comfort;