import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  
  FaTwitter,
} from 'react-icons/fa';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=' w-full h-[50px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300'>
    

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li>
  <a href="https://drive.google.com/file/d/1Y_ANXWkttacQ__HgIJ2TdmfkvB0V75s3/view" target="_blank" rel="noopener noreferrer">
    C.V. Survey Engineer
  </a>
</li>
        <li>
  <a href="https://drive.google.com/file/d/1Qz1t9Y19bejJoCKKa7iS6Xq0hHERW-Rt/view" target="_blank" rel="noopener noreferrer">
    C.V. Developer
  </a>
</li>

        
      </ul>

{/* Hamburger */}
<div onClick={handleClick} className='md:hidden z-10 absolute top-6 right-6'>
  {!nav ? <FaBars /> : <FaTimes />}
</div>

{/* Mobile menu */}
<ul
  className={`${
    nav ? 'translate-x-0' : '-translate-x-full'
  } absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-500`}
>
  <li className='py-6 text-4xl text-center'>
    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
      Home
    </Link>
  </li>
  <li className='py-6 text-4xl text-center'>
    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
      About
    </Link>
  </li>
  <li className='py-6 text-4xl text-center'>
    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
      Work
    </Link>
  </li>
  <li className='py-6 text-4xl text-center'>
    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
      Skills
    </Link>
  </li>
  <li className='py-6 text-4xl text-center'>
    <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
      Projects
    </Link>
  </li>
  <li className='py-6 text-4xl text-center'>
  <a
    onClick={handleClick}
    href='https://drive.google.com/file/d/1Y_ANXWkttacQ__HgIJ2TdmfkvB0V75s3/view'
    target='_blank'  // Opens the link in a new tab
    rel='noopener noreferrer'  // Adds security when opening a new tab
  >
    C.V.Survey Engineer
  </a>
</li>

<li className='py-6 text-4xl text-center'>
  <a
    onClick={handleClick}
    href="https://drive.google.com/file/d/1Qz1t9Y19bejJoCKKa7iS6Xq0hHERW-Rt/view"
    target='_blank'  // Opens the link in a new tab
    rel='noopener noreferrer'  // Adds security when opening a new tab
  >
    C.V.Developer
  </a>
</li>

</ul>

{/* Social icons */}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
      <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/anılbaşaran/'>
        Linkedin <FaLinkedin size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
      <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/AnilBASARAN'>
        Github <FaGithub size={30} />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
      <a className='flex justify-between items-center w-full text-gray-300' href='https://x.com/nlbsrn'>
        Twitter <FaTwitter size={30} />
      </a>
    </li>
  </ul>
</div>

     
    </div>
  );
};

export default Navbar;
