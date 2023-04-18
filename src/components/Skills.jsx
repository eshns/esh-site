import React from 'react'
import Image from 'next/image';

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JAVASCRIPT from '../assets/javascript.png'
import REACTImg from '../assets/react.png'
import NODE from '../assets/node.png'
import FireBase from '../assets/firebase.png'
import AWS from '../assets/aws.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import MONGO from '../assets/mongo.png'

export const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#F6683C]'>Skills</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={REACTImg} alt="React ICON" width={80} height={80}/>
              <p className='my-4'>REACT</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={NODE} alt="Nodejs ICON" width={80} height={80}/>
              <p className='my-4'>NODE JS</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={HTML} alt="HTML ICON" width={80} height={80}/>
              <p className='my-4'>HTML</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={CSS} alt="CSS ICON" width={80} height={80}/>
              <p className='my-4'>CSS</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={JAVASCRIPT} alt="Javascript ICON" width={80} height={80}/>
              <p className='my-4'>JAVASCRIPT</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={Tailwind} alt="Aws ICON" width={80} height={80}/>
              <p className='my-4'>TAILWIND</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={GitHub} alt="Github ICON" width={80} height={80}/>
              <p className='my-4'>GITHUB</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={MONGO} alt="Mongodb ICON" width={80} height={80}/>
              <p className='my-4'>MONGO DB</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={AWS} alt="Aws ICON" width={80} height={80}/>
              <p className='my-4'>AWS</p>
            </div>

            <div className='hover:scale-110 duration-500'>
              <Image className='mx-auto' src={FireBase} alt="Aws ICON" width={80} height={80}/>
              <p className='my-4'>FIREBASE</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}
