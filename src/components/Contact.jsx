import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/970a94d0-977d-4652-9f09-a196d2732667" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#F6683C] text-gray-300'>Get In Touch</p>
            </div>

            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-[#ccd6f6]' name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>

            <div className='py-10'>
              <button className='group relative text-white hover:border-[#F6683C] border-2 px-6 py-3 mx-auto my-2 flex items-center'>
                <div className="absolute inset-0 w-0 bg-[#F6683C] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative group-hover:text-white">
                  Send Message
                </span>
              </button>
            </div>
        </form>
    </div>
  )
}
