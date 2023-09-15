import Image from 'next/image';
import React from 'react';
import '../app/globals.css'
import chatImg from '/public/assets/projects/chatclosesc.png';
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
          src={chatImg}
          alt='/'
        />
                
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                  <h2>Python Live Chat App</h2>
                  <h3>Personal Project</h3>
                </div>
    
              </div>
    
              <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                  <h2 className='mb-5'>Project Overview</h2>
                  <p>With the goal of learning Flask and Socket.io, I created a Python Live Chat Appliation. This project showcases a web-based chat application built with Flask and Socket.io. Its primary focus is on enabling seamless real-time communication between users. The application allows users to create new chat rooms or join existing ones using unique room codes, facilitating instant and secure conversations. Its architecture leverages Flask, a Python web framework, for server-side operations, while Socket.io handles the WebSocket-based communication for real-time messaging.</p>
          
    
                  <a href='https://github.com/aijaza1/LiveChatApp' alt='/' target='_blank'>
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
                        <RiRadioButtonFill /> Flask
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> SocketIO
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> JavaScript
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> CSS
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> VS Code
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> GitHub
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