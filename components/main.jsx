import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {AiOutlineFilePdf} from 'react-icons/ai'

const main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>

        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    
                </p>
                <h1 className='py-4 text-gray-700'> 
                    Hi, I'm <span className='text-[#DA0037]'>Azeem</span>
                </h1>

                <h1 className='py-2 text-gray-700 text-2xl md:text-3xl mx-10 :'> 
                    A Passionate Web Developer / Software Engineer 
                </h1>

                <p className='py-4 text-gray-600 max-w-[60%] m-auto'>
                    I am a recent VCU graduate with a B.S. in Computer Science. I am currently searching for a full-time offer.
                </p>

                <div className='flex items-center justify-between max-w-[380px] m-auto py-4'>
                    
                    <a href='https://www.linkedin.com/in/azeem-aijaz/' alt='/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn size={25} />
                        </div>
                    </a>

                    <a href='https://github.com/aijaza1' alt='/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub size={25}/>
                        </div>
                    </a>

                    <a href='mailto: aijaza@vcu.edu' alt='/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={25}/>
                        </div>
                    </a>

                    <a href='/assets/AzeemAijaz-Resume.pdf' alt='/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineFilePdf size={25}/>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default main