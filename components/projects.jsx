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
import ProjectItem from './ProjectItem';
import { useState, useRef} from 'react';


const Projects = () => {
    const allProjects = [
      {
        title: 'NobleCanni Internship',
        backgroundImg: noble,
        tools: 'WordPress | HTML | CSS | JS',
        projectUrl: '/noblecanni'
      },
      {
        title: 'Capstone Project',
        backgroundImg: cap,
        tools: 'Google Colab | Python | GitHub',
        projectUrl: '/capstone'
      },
      {
        title: 'Java Race Track',
        backgroundImg: race,
        tools: 'Java | JavaFX | IntelliJ',
        projectUrl: '/track'
      },
      {
        title: 'Flash Card App',
        backgroundImg: cards,
        tools: 'Python | PyCharm | Tkinter',
        projectUrl: '/card'
      },
      {
        title: 'VCU App Redesign',
        backgroundImg: app,
        tools: 'Figma | Discord',
        projectUrl: '/app'
      },
      {
        title: 'FIFO Multi-Threaded Queue',
        backgroundImg: fifo,
        tools: 'C | Linux | Command Line',
        projectUrl: '/fifo'
      },
      
    ];
  
    const maxVisibleProjects = 4;
    const [visibleProjects, setVisibleProjects] = useState(maxVisibleProjects);
  
    const handleSeeMore = () => {
      setVisibleProjects(allProjects.length);
    };
  
    const handleSeeLess = () => {
      setVisibleProjects(maxVisibleProjects);
      window.location.href = '/#projects'; 
    };
  
    const showSeeMore = visibleProjects < allProjects.length;
    const showSeeLess = visibleProjects > maxVisibleProjects;

    
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    
    const handleButton1 = () => {
      setShowContent1(!showContent1);
    };
    
    const handleButton2 = () => {
      setShowContent2(!showContent2);
    };
    return (
      <div id='projects' className='w-full'>
      <div className='max-2-[1240px] mx-auto px-20 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#DA0037] mt-8'>Projects</p>
        <h2 className='pt-4 pb-8'>What I've Built</h2>
        
        <div className='grid md:grid-cols-2 gap-8'>
          
          {/* Project 1 */}
          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]'>
            <Image className='rounded-xl group-hover:opacity-10' 
              src='/assets/projects/noblecanni.png' width='600' height='400' alt='Project 2' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>Project 2 Title</h3>
              <p className='pb-4 pt-2 text-white text-center'>Project 2 Tools</p>
              
              
              <button onClick={handleButton1}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>{showContent1 ? 'Hide Info' : 'Show Info'}</p>
              </button>


            </div>
          </div>
          {showContent1 && (
      
                  <div>
                  <h2>NobleCanni Internship</h2>
                  <h3>Wordpress | HTML | CSS | JS</h3>
                  <p>Show the info here.....</p>   
                  </div>
                  
              )}
          
          {/* Project 2 */}

          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651E5] to-[#709DFF]'>
            <Image className='rounded-xl group-hover:opacity-10' 
              src='/assets/projects/noblecanni.png' width='600' height='400' alt='Project 2' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>Project 2 Title</h3>
              <p className='pb-4 pt-2 text-white text-center'>Project 2 Tools</p>
              
              
              <button onClick={handleButton2}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>{showContent2 ? 'Hide Info' : 'Show Info'}</p>
              </button>


            </div>
          </div>
          {showContent2 && (
      
                  <div>
                  <h2>Capstone Intern</h2>
                  <h3>Wordpress | HTML | CSS | JS</h3>
                  <p>Show the info here.....</p>   
                  </div>
                  
              )}

          
          
          
          
          {/* Add more project divs as needed */}   
        </div>
          
   


    
        {showSeeMore && (
          <div className='flex justify-center mt-8'>
            <button
              className='px-6 py-3 bg-gray-300 text-white rounded hover:bg-gray-400 mr-4'
              onClick={handleSeeMore}
            >
              See More
            </button>
          </div>
        )}
    
        {showSeeLess && (
          <div className='flex justify-center mt-8'>
            <button
              className='px-6 py-3 bg-gray-300 text-white rounded hover:bg-gray-400'
              onClick={handleSeeLess}
            >
              See Less
            </button>
          </div>
        )}
      </div>
    </div>
    );
  };

  export default Projects;