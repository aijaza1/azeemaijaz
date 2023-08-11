import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const about = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-start py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#DA0037] mt-8'>About</p>
                <h2 className='py-4'>Who I Am</h2>

                <p className='py-2 text-gray-600'>I first discovered my interest with programming in High School, which influenced my decision to major in Computer Science. I am a very passionate and hardworking person and really enjoy solving problems and doing research.</p>

                <p className='py-2 text-gray-600'>I recently graduated from VCU with a Bachelors of Science in Computer Science. I have worked on many projects in and out of school including working as an intern with NobleCanni to develop my Web Design and collaboration skills in a real professional setting. I have always been a very motivated individual and am ready to put all my effort into my next challenge.</p>
      
            </div>

                
                <Image
                    src="/assets/mypic.png"
                    alt="/"
                    height='500'
                    width='500'
                    className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-3 hover:scale-105 ease-in duration-300"
                />


        </div>

    </div>
    

  )
}

export default about