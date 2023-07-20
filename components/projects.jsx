"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import nobleImg from '/public/assets/projects/noblecanni.png';
import comfortImg from '/public/assets/projects/comfortcaloriesc.png';
import race from '/public/assets/projects/carsc.png';
import app from '/public/assets/projects/vcuapp.png';
import cards from '/public/assets/projects/flashcard.png';
import brightminds from '/public/assets/projects/brightminds.png';
import fifo from '/public/assets/projects/a3fifo.png';
import shell from '/public/assets/projects/shell.png';
import cap from '/public/assets/projects/capstoneposter.png';
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='mt-12 text-xl tracking-widest uppercase text-[#DA0037]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          

          <ProjectItem
            title='NobleCanni Web Intern'
            backgroundImg={nobleImg}
            projectUrl='/noble'
            tools='Wordpress | HTML | CSS | JS'
          />
          <ProjectItem
            title='Comfort Calorie'
            backgroundImg={comfortImg}
            projectUrl='/comfort'
            tools='NextJS | React | TailwindCSS '
          />
          <ProjectItem
            title='Capstone Project'
            backgroundImg={cap}
            projectUrl='/capstone'
            tools='Google Colab | Python | GitHub'
          />
          <ProjectItem
            title='JavaFX Race Track'
            backgroundImg={race}
            projectUrl='/car'
            tools='Java | JavaFX | IntelliJ'
          />
          <ProjectItem
            title='Flash Card App'
            backgroundImg={cards}
            projectUrl='/card'
            tools='Python | PyCharm | Tkinter'
          />
          <ProjectItem
            title='FIFO Multi-Threaded Queue'
            backgroundImg={fifo}
            projectUrl='/fifo'
            tools='C | Linux | Command Line'
          />

          

        </div>
      </div>
    </div>
  );
};

export default Projects;