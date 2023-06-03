"use client";

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {usePathname } from 'next/navigation';

const Navbar = () => {

  {/* useState(false) is React Hook that 
initializes state var 'nav' and function 'setNav' 
'nav' is set to false initially (the state of the menu)
'handleNav' is function that changes val of 'nav' back and forth
*/}
  const [nav, setNav] = useState(false);

  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = usePathname();

  const specialRoutes = ['/noblecanni', '/brightminds', '/fifo', '/card', '/track', '/app', '/shell', '/capstone'];


  useEffect (()=>{
    if(specialRoutes.includes(router)) 
     {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav)
  }

  {/* whenever there is a scroll, check this function to set shadow true or false*/}
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90 || specialRoutes.includes(router)){
        setShadow(true)
      }
      else
        setShadow(false)
    }
    window.addEventListener('scroll', handleShadow);

  },[])


  return (

    
    
    <div 
    style={{backgroundColor: `${navBg}`}}
    
    className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        {/* top nav bar, if shadow is true then make shadow (scrolled down), if false remove shadow (at top)*/}

        <div className={`flex justify-between items-center w-full h-full px-2 2xl:px-16 ${specialRoutes.includes(router) ? 'text-white' : ''}`}>
            {/* top nav bar */}
            
            {/* logo */}
            <div className='ml-5'>
              <Link href='/'>
                <Image src="/../public/assets/newlogo.png" 
                alt="/"  
                width='170' 
                height='60' 
                />
              </Link>
            </div>
          

            {/* pages at top, hidden (when smaller) and if medium screen or higher, it appears */}
            <div>

            <ul className='hidden md:flex mr-14'>
              <li className='ml-10 text-md uppercase hover:text-[#DA0037] hover:font-semibold'>
                <Link href='/'>Home</Link>
              </li>

              <li className='ml-10 text-md uppercase hover:text-[#DA0037] hover:font-semibold'>
                <Link href='/#about'>About</Link>
              </li>

              <li className='ml-10 text-md uppercase hover:text-[#DA0037] hover:font-semibold'>
                <Link href='/#skills'>Skills</Link>
              </li>

              <li className='ml-10 text-md uppercase hover:text-[#DA0037] hover:font-semibold'>
                <Link href='/#projects'>Projects</Link>
              </li>

              <li className='ml-10 text-md uppercase hover:text-[#DA0037] hover:font-semibold'>
                <Link href='/#contact'>Contact</Link>
              </li>
            </ul>

              {/* hamburger menu hidden on medium or above, when clicked, 
              handleNav which changes the nav variable 
              to open smaller nav screen  */}
              <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25} />
              </div>

            </div>

        </div>

        {/* if nav is true (menu is pressed or small enough)
        open small nav menu, hide background lower opacity */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          
          {/* if nav true, make small screen look normal
          if false, get rid of small screen */}
          <div className={
          nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            
            {/* small nav bar section */}
            <div>
              <div className='flex w-full items-center justify-between'>
                
                {/* small nav bar logo */}
                <Link href='/'>
                  <Image src='/../public/assets/newlogo.png' width='120' height='70' alt='/' />
                </Link>

                {/* x button to close, when clicked close small nav */}
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineClose />
                </div>

              </div>

              {/* text under logo with line under */}
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4 font-semibold'>A Passionate Web Developer / Software Engineer </p>
              </div>

              
            </div>

            {/* small nav bar links in a column order evenly spaced */}
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                <li onClick={()=> setNav(false)} className='py-4 text-md hover:text-[#DA0037] hover:font-bold'>Home</li>
                </Link>

                <Link href='/#about'>
                <li onClick={()=> setNav(false)} className='py-4 text-md hover:text-[#DA0037] hover:font-bold'>About</li>
                </Link>

                <Link href='/#skills'>
                <li onClick={()=> setNav(false)} className='py-4 text-md hover:text-[#DA0037] hover:font-bold'>Skills</li>
                </Link>

                <Link href='/#projects'>
                <li onClick={()=> setNav(false)} className='py-4 text-md hover:text-[#DA0037] hover:font-bold'>Projects</li>
                </Link>

                <Link href='/#contact'>
                <li onClick={()=> setNav(false)} className='py-4 text-md hover:text-[#DA0037] hover:font-bold'>Contact</li>
                </Link>
              </ul>

              {/* small nav bar 'connect' section */}
              <div className='pt-[30%] '>
                <p className='uppercase tracking-widest text-[#DA0037]'>Let's Connect</p>
                
                {/* logos and links */}
                {/* for links, use <a */}


                
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>


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
                    <BsFillPersonLinesFill />
                  </div>
                </a>

                </div>
              </div>
            </div>



          </div>

        </div>



    </div>
  )
}

export default Navbar