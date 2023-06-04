import Navbar from '../components/Navbar'
import '../app/globals.css'
import Image from 'next/image'
import React from 'react'
import img from '../public/assets/projects/capstonesc.png'
import cap from '../public/assets/projects/capstoneposter.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'



const capstone = () => {
  return (

    
    <>
      <Navbar />


    
    <div className='w-full relative'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            
            <Image className='absolute z-0' layout='fill' objectFit='cover' src={cap} alt='/' />
            
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2>Data-Science Based Modules for Digital Forensics</h2>
              <h3>Senior Capstone - 4 Person Project</h3>

            </div>

          </div>

          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
              <h2 className='mb-3'>Project Overview</h2>
              <p>This project aimed to assist forensic scientists with limited coding experience by providing user-friendly learning modules in the areas of Chat Logs and Images. Sponsored by VCU College of Engineering and guided by Kostadin Damevski, our objective was to develop entry-level friendly data science modules that would support the transition of digital forensic investigators into the field.</p>
              <p className='pt-3'>As a key member of the project, I played a crucial role in scheduling meetings, driving the project's progress, and ensuring effective collaboration among team members. I conducted extensive research to expand the modules with additional sections and implemented emotion detection for chat log messages. Additionally, I created visual graphs to enhance data visualization and analysis for forensic scientists.</p>
              <p className='pt-3'>These contributions aimed to empower forensic scientists by equipping them with coding techniques to expedite their tasks and gain deeper insights into the data they analyze.</p>

              <a href='https://github.com/aijaza1/CapstoneProject' alt='/' target='_blank'>
                <button className='px-8 py-2 mt-4 mr-8'>GitHub Repo</button>
              </a>

              <a href='https://colab.research.google.com/drive/1pI_FhRjkvEyl6ENrK6WiJ5GKs4fE6cbG?usp=sharing' alt='/' target='_blank'>
                <button className='px-8 py-2 mt-4 mr-8'>Colab Module</button>
              </a>

              
            </div>

            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='p-2'>
                
                <p className='text-center font-bold pb-2 underline'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                    
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> Python
                  </p>

                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill /> Google Colab
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
}

export default capstone