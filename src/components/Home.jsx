import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='w-full bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
        <p className='text-pink-600 mt-24 text-2xl'>Hi, my name is</p>
        <div className='flex justify-between items-end '>
        
      
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Anil Basaran
        </h1>
        <img  className="h-[200px] w-[100px] m-4 rounded-full object-cover" src={Logo} alt='foto' style={{ width: '200px' }} />
        </div>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm Front-End Developer focused on React.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I graduated from Patika Full Stack Web Development Bootcamp. I started my journey learning Java , Spring for the backend... Ended up learning Node.js Express and all that are come with it.I’m a self proclaimed full-stack developer specializing in copying and pasting (and occasionally
          writing inspiring one liners) Currently, I am learning and facinated by Authorization, Tokens and all that good stuff, Enjoying my newly aquired knowledge MongoDb,Node, still far away being an expert but hey, thats the journey... I’m focused on
          building responsive full-stack web applications.
        </p>
        <p className='text-pink-600 text-sm'>Almost 40 years of experience.</p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Also playing with Codewars one liners , LeetCode solutions and occasionally trying to solve a 4kyu...</p>
        <div>
        <Link to="work" smooth={true} duration={500}>
  <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
    View Work
    <span className="group-hover:rotate-90 group-hover:scale-150 duration-300 transform text-xl">
      <HiArrowNarrowRight className="ml-3" />
    </span>
  </button>
</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
