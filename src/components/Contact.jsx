import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/970a94d0-977d-4652-9f09-a196d2732667" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#F6683C] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>{`// Submit the form below or shoot me an email - esantiagohz@gmail.com`}</p>
            </div>

            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='p-2 bg-[#ccd6f6]' name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#F6683C] hover:border-[#F6683C] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}
