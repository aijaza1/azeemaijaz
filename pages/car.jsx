import Image from 'next/image';
import React from 'react';
import '../app/globals.css'
import carImg from '/public/assets/projects/racetrack.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Navbar from "../components/Navbar";



const car = () => {
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
          src={carImg}
          alt='/'
        />
                
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                  <h2>JavaFx Race Track</h2>
                </div>
    
              </div>
    
              <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                  <h2 className='mb-5'>Project Overview</h2>
                  <p>This project is a dynamic GUI application called Race Track that simulates a race between three cars on separate tracks. The application uses multithreading to ensure smooth animations and concurrent movements of the cars. Users can interact with the GUI, controlling the race with options to start, pause, and reset the race. As the cars progress randomly, the first car to cross the finish line triggers a winner screen, creating a seamless user experience. The project offers an engaging racing adventure that can be restarted at any time.</p>
                  
    
    
                  <a href='https://github.com/aijaza1/RaceTrack' alt='/' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>Source Code</button>
                  </a>
                  
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                  <div className='p-2'>
                    
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Java
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> JavaFX
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> IntelliJ
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
};

export default car;