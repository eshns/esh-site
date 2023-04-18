import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    const currentYear = new Date();
    return (
      <footer className='bg-[#0a192f] text-gray-300 pb-10'>
        <div className='flex flex-col justify-center items-center'>
            <span>
              © <span id="year">{currentYear.getFullYear()} </span> 
              <Link href="/">Emmanuel Hernandez. </Link> 
              All rights reserved.
            </span>
        </div>
      </footer>
    );
}