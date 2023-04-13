import React from 'react'

export const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

        <h1 className='text-4xl py-2 sm:text-7xl font-bold text-[#ccd6f6] group transition-all duration-300 ease-in-out'>
          Hi, I am <span className='text-[#F6683C] cursor-pointer  bg-left-bottom bg-gradient-to-r from-[#F6683C] to-[#F6683C] bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] transition-all duration-500 ease-in-out'>Emmanuel</span> 
        </h1>
        <h2 className='text-4xl py-2 sm:text-7xl font-bold text-[#ccd6f6]'>Full Stack Web Developer</h2>
        <p className='text-lg text-[#8892b0] py-2 max-w-[700px]'>I&apos;m focused on building responsive front-end web applications integrating back-end technologies.</p>

        <div className='py-10'>
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
