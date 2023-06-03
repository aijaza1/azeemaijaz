"use client";

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {usePathname } from 'next/navigation';

const Navbar = () => {

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
        

        <div className={`flex justify-between items-center w-full h-full px-2 2xl:px-16 ${specialRoutes.includes(router) ? 'text-white' : ''}`}>

            

            <div className='ml-5'>
              <Link href='/'>
                <Image src="/assets/newlogo.png" 
                alt="/"  
                width='170' 
                height='60' 
                />
              </Link>
            </div>
          

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

              <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={25} />
              </div>

            </div>

        </div>

     
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          

          <div className={
          nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            
            <div>
              <div className='flex w-full items-center justify-between'>
                
                <Link href='/'>
                  <Image src='/assets/newlogo.png' width='120' height='70' alt='/' />
                </Link>

                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineClose />
                </div>

              </div>

              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4 font-semibold'>A Passionate Web Developer / Software Engineer </p>
              </div>

              
            </div>

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

              <div className='pt-[30%] '>
                <p className='uppercase tracking-widest text-[#DA0037]'>Let's Connect</p>
                


                
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