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
  
    const projectsToDisplay = allProjects.slice(0, visibleProjects);
    const showSeeMore = visibleProjects < allProjects.length;
    const showSeeLess = visibleProjects > maxVisibleProjects;
  
    return (
      <div id='projects' className='w-full'>
        <div className='max-2-[1240px] mx-auto px-20 py-16'>
          <p className='text-xl tracking-widest uppercase text-[#DA0037] mt-8'>Projects</p>
          <h2 className='pt-4 pb-8'>What I've Built</h2>
  
          <div className='grid md:grid-cols-2 gap-8'>

            {projectsToDisplay.map((project, index) => (
              <ProjectItem
                key={index}
                title={project.title}
                backgroundImg={project.backgroundImg}
                tools={project.tools}
                projectUrl={project.projectUrl}
              />
            ))}
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