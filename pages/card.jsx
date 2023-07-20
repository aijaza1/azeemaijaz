import Image from 'next/image';
import React from 'react';
import '../app/globals.css'
import cardImg from '/public/assets/projects/flashcard.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Navbar from "../components/Navbar";



const card = () => {
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
          src={cardImg}
          alt='/'
        />
                
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                  <h2>Flash Card App</h2>
                  <h3>Personal Project</h3>
                </div>
    
              </div>
    
              <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                  <h2 className='mb-5'>Project Overview</h2>
                  <p>In a personal project, I developed a flashcard app using Python and utilized the Tkinter library for the graphical user interface. The goal was to create a tool for practicing words in my home language, Urdu. With the app, I could easily add new words to the flashcard deck and review them at my own pace. The intuitive interface allowed me to navigate through the flashcards and test my knowledge effectively. By implementing this project, I enhanced my Python programming skills and created a practical tool for language learning tailored to me or any user's specific needs.</p>
          
    
                  <a href='https://github.com/aijaza1/Flashcard' alt='/' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>Source Code</button>
                  </a>
                  
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                  <div className='p-2'>
                    
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Python
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> PyCharm
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Tkinter
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

export default card;