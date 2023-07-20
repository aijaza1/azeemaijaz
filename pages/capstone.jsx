import Image from 'next/image';
import React from 'react';
import '../app/globals.css'
import capImg from '/public/assets/projects/capstonesc.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Navbar from "../components/Navbar";



const capstone = () => {
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
          src={capImg}
          alt='/'
        />
                
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                  <h2>Capstone Project</h2>
                  <h3>Data Science-Based Course Modules For Digital Forensics</h3>
                </div>
    
              </div>
    
              <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                  <h2 className='mb-5'>Project Overview</h2>
                  <p>My Capstone project aimed to support forensic scientists with limited coding experience. We developed user-friendly learning modules in Chat Logs and Images to assist the transition of digital forensic investigators into the field. My role involved driving project progress, conducting research, implementing features like emotion detection, and creating visual graphs for data analysis. Our goal was to empower forensic scientists with coding techniques and tools for efficient and insightful data analysis in order to speed up slow manual tasks.</p>
    
    
                  <a href='https://github.com/aijaza1/CapstoneProject' alt='/' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>GitHub Repo</button>
                  </a>

                  <a href='https://colab.research.google.com/drive/1pI_FhRjkvEyl6ENrK6WiJ5GKs4fE6cbG?usp=sharing' alt='/' target='_blank'>
                    <button className='px-8 py-2 mt-4 mr-8'>Colab Module</button>
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
                        <RiRadioButtonFill /> Google Colab
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Github
                      </p>
    
                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Jupyter Notebook
                      </p>

                      <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill /> Zoom
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

export default capstone;