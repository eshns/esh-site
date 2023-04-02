import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

export const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        {/* <p className='text-[#F6683C] py-1'>LET&apos;S BUILD SOMETHING TOGETHER</p> */}
        <h1 className='text-4xl py-2 sm:text-7xl font-bold text-[#ccd6f6]'>
          Hi, I am <span className='text-[#F6683C]'>Emmanuel</span> 
        </h1>
        <h2 className='text-4xl py-2 sm:text-7xl font-bold text-[#ccd6f6]'>Full Stack Web Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I&apos;m focused on building responsive front-end web applications integrating back-end technologies.</p>

        <div>
          <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F6683C] hover:border-[#F6683C]'>
            <span>
              View Work
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
