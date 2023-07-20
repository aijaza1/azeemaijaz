"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { AiOutlineFilePdf } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = usePathname();

  const specialRoutes = [

    '/noble',
    '/comfort',
    '/capstone',
    '/card',
    '/track',
    '/app',
    '/shell',
  ];

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Update navbar appearance based on special routes
    if (specialRoutes.includes(router)) {
      setNavBg('transparent'); // Special routes have transparent navbar
      setLinkColor('#FFFFFF'); // White color for links in special routes
    } else {
      setNavBg('#ecf0f3'); // Default background color for the navbar
      setLinkColor('#1f2937'); // Default link color for the navbar
    }
  }, [router, specialRoutes]);

  // Toggle navigation menu
  const handleNav = () => {
    setNav(!nav);
  };

  // Close navigation menu
  const closeHamburgerMenu = () => {
    setNav(false);
  };

  useEffect(() => {
    // Handle shadow effect on navbar during scrolling
    const handleShadow = () => {
      if (window.scrollY >= 90 || specialRoutes.includes(router)) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);

    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, [router, specialRoutes]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}
    >
      <div className={`flex justify-between items-center w-full h-full px-2 2xl:px-16 ${specialRoutes.includes(router) ? 'text-white' : ''}`}>
      
        {/* Render logo with link to home */}
        <div className='ml-5 cursor-pointer' onClick={() => (window.location.href = '/#home')}>
          <Link href='/'>
            <Image src="/assets/newlogo.png" alt="/" width='170' height='60' />
          </Link>
        </div>
        <div>
     
            
              <div>
                <ul className='hidden md:flex mr-14'>
                <li className='ml-10 text-md uppercase hover:text-[#DA0037]' onClick={() => (window.location.href = '/#home')} style={{ color: `${linkColor}` }}>
                  Home
                </li>
                <li className='ml-10 text-md uppercase hover:text-[#DA0037]' onClick={() => (window.location.href = '/#about')} style={{ color: `${linkColor}` }}>
                  About
                </li>
                <li className='ml-10 text-md uppercase hover:text-[#DA0037]' onClick={() => (window.location.href = '/#skills')} style={{ color: `${linkColor}` }}>
                  Skills
                </li>
                <li className='ml-10 text-md uppercase hover:text-[#DA0037]' onClick={() => (window.location.href = '/#projects')} style={{ color: `${linkColor}` }}>
                  Projects
                </li>
                <li className='ml-10 text-md uppercase hover:text-[#DA0037]' onClick={() => (window.location.href = '/#contact')} style={{ color: `${linkColor}` }}>
                  Contact
                </li>
                </ul>
              </div>
              
            
            
          
          {/* hamburger menu */}
          <div className='md:hidden cursor-pointer' onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* hamburger menu display */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed right-[-120%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <div onClick={() => (window.location.href = '/')}>
                <Link href='/'>
                  <Image src='/assets/newlogo.png' width='120' height='70' alt='/' />
                </Link>
              </div>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 font-semibold'>A Passionate Web Developer / Software Engineer</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <div>
                  <li onClick={() => { window.location.href = '/#home'; closeHamburgerMenu(); }} className='py-4 text-md hover:text-[#DA0037]'>Home</li>
                  <li onClick={() => { window.location.href = '/#about'; closeHamburgerMenu(); }} className='py-4 text-md hover:text-[#DA0037]'>About</li>
                  <li onClick={() => { window.location.href = '/#skills'; closeHamburgerMenu(); }} className='py-4 text-md hover:text-[#DA0037]'>Skills</li>
                  <li onClick={() => { window.location.href = '/#projects'; closeHamburgerMenu(); }} className='py-4 text-md hover:text-[#DA0037]'>Projects</li>
                  <li onClick={() => { window.location.href = '/#contact'; closeHamburgerMenu(); }} className='py-4 text-md hover:text-[#DA0037]'>Contact</li>
                </div>
            </ul>


            
            <div className='pt-[30%] '>
              <p className='uppercase tracking-widest text-[#DA0037]'>Let's Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[70%]'>
                <a href='https://www.linkedin.com/in/azeem-aijaz/' alt='/' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href='https://github.com/aijaza1' alt='/' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a href='mailto: aijaza@vcu.edu' alt='/' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </a>
                <a href='/assets/AzeemAijaz-Resume.pdf' alt='/' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineFilePdf />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

