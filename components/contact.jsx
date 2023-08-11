import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import {AiOutlineFilePdf} from 'react-icons/ai'



const contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>

            <p className='text-xl tracking-widest uppercase text-[#DA0037] mt-8'>
                 Contact
            </p>

            <h2 className='py-4'>Get In Touch With Me</h2>

            <div className='grid lg:grid-cols-5 gap-8'>


        {/* left */}
        <div className='col-span-3 lg:col-span-2 w-full max-h-[680px] shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-2 h-full'>
                <div>
                    <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt='/' />
                </div>

                <div>
                    <h2 className='py-4'>Azeem Aijaz</h2>
                    <p>Software Engineer / Full-Stack Developer</p>
                    <p className='py-4'>I am currently searching for a full-time position. Feel free to contact me!</p>
                </div>


                <div>
                <p className='uppercase pt-10 text-[#DA0037] pl-2'>Connect With Me</p>
                
                <div className='flex items-center justify-between py-4 px-8'>

                <a href='https://www.linkedin.com/in/azeem-aijaz/' alt='/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>

                    <a href='https://github.com/aijaza1' alt='/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>

                    <a href='mailto: aijaza@vcu.edu' alt='/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </a>

                    <a href='/assets/AzeemAijaz-Resume.pdf' alt='/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineFilePdf />
                        </div>
                    </a>

                </div>
            </div>



            </div>
        </div>



            {/* right */}
            <div className='col-span-3 w-full sm:max-h-[800px] md:max-h-[680px] shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>


                    <form action="http://formsubmit.co/aijaza@vcu.edu" method="POST">
                        <div className='grid gap-4 w-full py-2'>
                            
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name*</label>
                                <input 
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='name'
                                required
                                />
                            </div>

                        </div>


                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email*</label> 
                            <input 
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type='email'
                            name='email'
                            required
                            />
                        </div>


                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label> 
                            <input 
                            className='border-2 rounded-lg p-3 flex border-gray-300'
                            type='text'
                            name='subject'
                            />
                        </div>


                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message*</label> 
                            <textarea name='message' required className='border-2 rounded-lg p-3 border-gray-300' rows='7'></textarea>
                        </div>

                        <button type='submit' className='w-full p-4 mt-3 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'>Send Message</button>
                    </form>


                </div>
            </div>


            </div>


        </div>

    </div>
  )
}

export default contact