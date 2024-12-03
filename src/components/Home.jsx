import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Logo from '../assets/logo.png';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-xl'>Hi, my name is</p>
        <div className='flex justify-between items-end '>
        
      
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Anil Basaran
        </h1>
        <img  className="h-[200px] w-[100px] m-4 rounded-full object-cover" src={Logo} alt='foto' style={{ width: '200px' }} />
        </div>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I started with Java and Spring... Ended up learning Node.js and all thats come with it.I’m a full-stack developer specializing in building (and occasionally
          designing) Currently, I am learning and facinated by authorization, tokens and all that good stuff, Enjoying my newly aquired skills MongoDb,Node, still far away being an expert but hey, thats the journey... I’m focused on
          building responsive full-stack web applications.
        </p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Also obsessed with one liner js codewar solutions and occasionally trying to solve a 4kyu...</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
