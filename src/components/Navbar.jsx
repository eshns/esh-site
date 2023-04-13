import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import Logo from '../assets/logo.png';
import Link from 'next/link'
import Image from 'next/image';
import {Link as InternalLink} from 'react-scroll' 

export const Navbar = () => {
    
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-20 bg-[#0a192f] text-gray-300'>
        <div className='cursor-pointer'>
            <InternalLink to="home" smooth={true} duration={500}>
                <Image src={Logo} alt='Logo Image' style={{ width: '150px', height:'150px' }} />
            </InternalLink>
        </div>
        
        {/* menu */}
        <ul className='hidden md:flex'>
            <li className='hover:underline hover:duration-500'>
                <InternalLink to="home" smooth={true} duration={500}>
                    Home
                </InternalLink>
            </li>
            <li className='hover:underline hover:duration-500'>
                <InternalLink to="about" smooth={true} duration={500}>
                    About
                </InternalLink>
            </li>
            <li className='hover:underline hover:duration-500'>
                <InternalLink to="skills" smooth={true} duration={500}>
                    Skills
                </InternalLink>
            </li>
            <li className='hover:underline hover:duration-500'>
                <InternalLink to="work" smooth={true} duration={500}>
                    Work
                </InternalLink>
            </li>
            <li className='hover:underline hover:duration-500'>
                <InternalLink to="contact" smooth={true} duration={500}>
                    Contact
                </InternalLink>
            </li>
        </ul>
  

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {
                !nav ? <FaBars /> : <FaTimes/>
            }
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <InternalLink onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </InternalLink>
            </li>
            <li className='py-6 text-4xl'>
                <InternalLink onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </InternalLink>
            </li>
            <li className='py-6 text-4xl'>
                <InternalLink onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </InternalLink>
            </li>
            <li className='py-6 text-4xl'>
                <InternalLink onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </InternalLink>
            </li>
            <li className='py-6 text-4xl'>
                <InternalLink onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </InternalLink>
            </li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 px-3'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center'>
                    <Link href="https://www.linkedin.com/in/emmanuel-santiago/" target="_blank">
                        <FaLinkedin size={30} color={'white'}/>
                    </Link>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center'>
                    <Link href="https://github.com/eshns" target="_blank">
                        <FaGithub size={30} color={'white'}/>
                    </Link>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center'>
                    <InternalLink to="contact" smooth={true} duration={500}>
                        <HiOutlineMail size={30} color={'white'}/>
                    </InternalLink>
                </li>
            </ul>
        </div>
    </div>
  )
}
