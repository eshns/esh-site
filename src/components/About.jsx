import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#F6683C]'>
              About
            </p>
          </div>

          <div></div>

        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl text-[#ccd6f6] font-bold'>
              <p>Career development as a software engineer</p>
            </div>

            <div className='text-[#8892b0]'>
              <p>
                I specialize in building mobile responsive front-end UI applications that connect with APIs and other backend technologies. 
                I&apos;m passionate about learning new technologies and understand that there is more than one way to accomplish a task. 
                Although I am most proficient in building front-end applications using HTML, CSS, JavaScript, and React, I am a quick learner 
                and can pick up new tech stacks as needed. I believe that being a great developer does not mean using one specific language, 
                but choosing the best tool for the job.
              </p>
              <p className='py-3'>
                I started web developement in 2017, developing multiple APIs using JavaScript and its runtime environment in NodeJS. 
              </p>  
            </div>
        </div>
      </div>
    </div>
  )
}
