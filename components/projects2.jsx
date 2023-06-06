"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import noble from '/public/assets/projects/noblecanni.png';
import race from '/public/assets/projects/carsc.png';
import app from '/public/assets/projects/vcuapp.png';
import cards from '/public/assets/projects/flashcard.png';
import brightminds from '/public/assets/projects/brightminds.png';
import fifo from '/public/assets/projects/a3fifo.png';
import shell from '/public/assets/projects/shell.png';
import cap from '/public/assets/projects/capstoneposter.png';
import { useState, useRef} from 'react';


const Projects2 = () => {

    const [showAllProjects, setShowAllProjects] = useState(false);
    const projectsContainerRef = useRef(null);
    
    const toggleProjects = () => {
        setShowAllProjects(!showAllProjects);
            if (showAllProjects) {
                window.location.href = '/#projects'; 
            }
    };
    
    const projectsToShow = showAllProjects ? 6 : 3;
    
    
    return (
      <div id='projects' className='w-full'>
      <div className='max-2-[1240px] mx-auto px-4 md:px-10 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#DA0037] mt-8'>Projects</p>
        <h2 className='pt-4 pb-8'>What I've Built</h2>
        
        <div className='grid md:grid-cols-2 gap-10' ref={projectsContainerRef}>
          
          {/* Project 1 */}
          {/* Col 1 */}
          <div className='bg-[#deebd987] order-2 md:order-1 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]'>
            
            <Image className='rounded-xl group-hover:opacity-10' 
              src={noble} width='600' height='400' alt='Project 1' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='sm:text-1xl md:text-2xl text-white tracking-wider text-center'>NobleCanni</h3>
              <h3 className='sm:text-1xl md:text-2xl text-white tracking-wider text-center'>Web Development Internship</h3>
              <p className='pb-4 pt-2 text-white text-center'>Wordpress | HTML | CSS | JavaScript</p> 
              </div>

          </div>

          {/* Col 2 */}
          <div className=' bg-[#deebd987] order-2 md:order-1 relative flex flex-col items-center justify-start h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4'>

                  <h2 className='text-center'>Web Development Intern</h2>
                  <h3>Wordpress | HTML | CSS | JavaScript</h3>
                  <h3 className='mb-1 mt-3 font-extrabold'>Project Overview</h3>
                  <p>During my web development internship at NobleCanni, I led a complete website redesign, enhancing user engagement. Working closely with the CEO and the developer team, I revitalized sections with modern design and intuitive interfaces, ensuring improved visual appeal, performance, and accessibility.</p>
                  <p className='pt-3'>The successful redesign received positive feedback, effectively increasing user engagement. This internship further developed my skills in web design, front-end development, and project management, emphasizing the importance of exceptional user experiences.</p>
                  <div className='flex justify-center'>
                    <a href='https://noblecanni.com/' alt='/' target='_blank'>
                        <button className='px-8 py-2 mt-4'>Current Site</button>
                    </a>  
                </div>
          </div>

          
          {/* P2 */}
          {/* Col 1 */}   
          <div className='bg-[#dff3f6ad] order-4 md:order-3 relative flex flex-col items-center justify-start h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <h2 className='text-center'>Senior Capstone Project</h2>
              <h3>Python | Google Colab | GitHub</h3>
              <h3 className='mb-1 mt-3 font-extrabold'>Project Overview</h3>
              <p>My Capstone project aimed to support forensic scientists with limited coding experience. We developed user-friendly learning modules in Chat Logs and Images to assist the transition of digital forensic investigators into the field. My role involved driving project progress, conducting research, implementing features like emotion detection, and creating visual graphs for data analysis. Our goal was to empower forensic scientists with coding techniques and tools for efficient and insightful data analysis in order to speed up slow manual tasks.</p>
              
              <div className='flex justify-center flex-wrap md:mt-7'>
                <a href='https://github.com/aijaza1/CapstoneProject' alt='/' target='_blank'>
                    <button className='mx-2 my-3 md:mx-8 md:my-0 px-8 py-2'>GitHub Repo</button>
                </a>
                <a href='https://colab.research.google.com/drive/1pI_FhRjkvEyl6ENrK6WiJ5GKs4fE6cbG?usp=sharing' alt='/' target='_blank'>
                    <button className='mx-2 my-3 md:mx-8 md:my-0 px-8 py-2'>Colab Module</button>
                </a>
            </div>
               
          </div>

          {/* Col 2 */}
          <div className='bg-[#dff3f6ad] order-3 md:order-4 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]'>
          <Image className='rounded-xl group-hover:opacity-10' 
              src={cap} width='600' height='400' alt='Project 2' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='sm:text-1xl md:text-2xl text-white tracking-wider text-center'>Data-Science Based Modules for Digital Forensics</h3>
              <p className='pb-4 pt-2 text-white text-center'>Python | Google Colab | GitHub</p>
              
              </div>   
          </div>



          {/* Project 3 */}
          {/* Col 1 */}
          <div className='bg-[#f5c9c984] order-5 md:order-5 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]'>
            
            <Image className='rounded-xl group-hover:opacity-10' 
              src={race} width='600' height='400' alt='Project 3' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='sm:text-1xl md:text-2xl text-white tracking-wider text-center'>Java Race Track</h3>
              <p className='pb-4 pt-2 text-white text-center'>Java | JavaFX | IntelliJ</p> 
              </div>

          </div>

          {/* Col 2 */}
          <div className=' bg-[#f5c9c984] order-6 md:order-6 relative flex flex-col items-center justify-start h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4'>

                  <h2 className='text-center'>Java Race Track</h2>
                  <h3>Java | JavaFX | IntelliJ</h3>
                  <h3 className='mb-1 mt-3 md:mt-16 font-extrabold'>Project Overview</h3>
                  <p>Using multithreading, I created a dynamic GUI application that simulates a race between three cars on separate tracks. Through synchronized threads, each car progresses randomly, and the first car to reach the finish line triggers a winner screen where the user can then restart the race.</p>
                  <div className='flex justify-center'>
                    <a href='https://github.com/aijaza1/RaceTrack' alt='/' target='_blank'>
                        <button className='px-8 py-2 mt-4'>Source Code</button>
                    </a>  
                </div>
          </div>


          {showAllProjects && (
            <>
          {/* Project 4 */}
          {/* Col 1 */}
          <div className='bg-[#deebd987] order-7 md:order-8 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]'>
            
            <Image className='rounded-xl group-hover:opacity-10' 
              src={cards} width='600' height='400' alt='Project 4' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='sm:text-1xl md:text-2xl text-white tracking-wider text-center'>Flash Card App</h3>
              <p className='pb-4 pt-2 text-white text-center'>Python | PyCharm | Tkinter</p> 
              </div>

          </div>

          {/* Col 2 */}
          <div className=' bg-[#deebd987] order-8 md:order-7 relative flex flex-col items-center justify-start h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4'>

                  <h2 className='text-center'>Flash Card App</h2>
                  <h3>Python | PyCharm | Tkinter</h3>
                  <h3 className='mb-1 mt-3 md:mt-16 font-extrabold'>Project Overview</h3>
                  <p>In a personal project, I developed a flashcard app using Python and utilized the Tkinter library for the graphical user interface. The goal was to create a tool for practicing words in my home language, Urdu. With the app, I could easily add new words to the flashcard deck and review them at my own pace. The intuitive interface allowed me to navigate through the flashcards and test my knowledge effectively. By implementing this project, I enhanced my Python programming skills and created a practical tool for language learning tailored to my or any user's specific needs.</p>
                  <div className='flex justify-center'>
                    <a href='https://github.com/aijaza1/Flashcard' alt='/' target='_blank'>
                        <button className='px-8 py-2 mt-6'>Source Code</button>
                    </a>  
                </div>
          </div>



           {/* P5 */}
          {/* Col 1 */}   
          <div className='bg-[#dff3f6ad] order-10 md:order-10 relative flex flex-col items-center justify-start h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <h2 className='text-center'>FIFO Multi-Threaded Queue</h2>
              <h3>C | Linux | Command Line</h3>
              <h3 className='mb-1 mt-3 md:mt-16 font-extrabold'>Project Overview</h3>
              <p>This project involved implementing a multi-process and multi-threaded print server in C on the command line. It required creating a globally shared printer queue, managing user processes as producers, and printer threads as consumers. The project also included handling command line parameters, graceful termination using signal handlers, and generating a final report that analyzed execution times and waiting times for different queue implementations.</p>
              
              <div className='flex justify-center'>
                    <a href='https://github.com/aijaza1/Multi-Process-ThreadPrintServer' alt='/' target='_blank'>
                        <button className='px-8 py-2 mt-6'>Source Code</button>
                    </a>  
                </div>
               
          </div>

          {/* Col 2 */}
          <div className='bg-[#dff3f6ad] order-9 md:order-9 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]'>
          <Image className='rounded-xl group-hover:opacity-10' 
              src={fifo} width='600' height='400' alt='Project 2' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='sm:text-1xl md:text-2xl text-white tracking-wider text-center'>FIFO Multi-Threaded Queue</h3>
              <p className='pb-4 pt-2 text-white text-center'>C | Linux | Command Line</p>
              
              </div>   
          </div>



            {/* Project 6 */}
          {/* Col 1 */}
          <div className='bg-[#f5c9c984] order-11 md:order-12 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]'>
            
            <Image className='rounded-xl group-hover:opacity-10' 
              src={app} width='600' height='400' alt='Project 4' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='sm:text-1xl md:text-2xl text-white tracking-wider text-center'>VCU App Redesign</h3>
              <p className='pb-4 pt-2 text-white text-center'>Figma | Discord</p> 
              </div>

          </div>

          {/* Col 2 */}
          <div className=' bg-[#f5c9c984] order-12 md:order-11 relative flex flex-col items-center justify-start h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4'>

                  <h2 className='text-center'>VCU App Redesign</h2>
                  <h3>Figma | Discord</h3>
                  <h3 className='mb-1 mt-3 md:mt-16 font-extrabold'>Project Overview</h3>
                  <p>In my web design class, as a team, we redesigned our school's app's (VCU) lackluster UX/UI designs using Figma. Through collaborative efforts on Discord, we created a comprehensive mock-up with intuitive navigation and modern aesthetics. We refined the design, and strengthened our UX/UI and teamwork skills. The result was a visually appealing and engaging app redesign.</p>
                  <div className='flex justify-center'>
                    <a href='https://www.figma.com/file/xWX7X03O0Y6B6UgdvO5BuO/VCU-Super-App?type=design&node-id=0%3A1&t=OXsDfCwZWpn9mbB8-1' alt='/' target='_blank'>
                        <button className='px-8 py-2 mt-6'>Figma Link</button>
                    </a>  
                </div>
          </div>


              
            </>
          )}

          

         {/* Add more project divs as needed */}
         </div>


         {!showAllProjects && (
          <div className='flex justify-center mt-4'>
            <button className='px-8 py-2' onClick={toggleProjects}>
              See More
            </button>
          </div>
        )}

        {showAllProjects && (
          <div className='flex justify-center mt-4'>
            <button className='px-8 py-2' onClick={toggleProjects}>
              See Less
            </button>
          </div>
        )}
          
   
      
    
      </div>
    </div>
    );
  };

  export default Projects2;