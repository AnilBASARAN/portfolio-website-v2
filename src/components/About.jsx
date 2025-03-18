import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full  bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center  items-center md:w-full  w-196'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='  pb-8 pl-4 mt-12'>
            <p className='text-4xl font-bold inline border-b-4  border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] text-left  w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className=' text-xl sm:text-4xl font-bold'>
              <p>Hi. I'm Anil Basaran, nice to meet you. Please take a look around.</p>
            </div>
            <div className='flex flex-col gap-2 items-center  justify-center sm:text-center'>
              <p className='text-xl'>Graduated from Yildiz Technical University.</p>
              <p className='text-gray-400'>As a Survey <span className=' text-yellow-200 font-semibold text-xl'>Engineer</span></p>
              <p>Worked on several diciplines including building <span className='text-sm text-pink-600'>bullet train paths</span>, highways,<span className='text-xl text-red-400'>and structures  related</span></p> 
              <p>Also worked in constructring. Building <span className=' text-cyan-600 font-semibold text-xl'>Skyscrapers</span>...Found out Survey engineering not that glamarous.</p>
              <p> Ended up being a <span className=' text-yellow-200 font-semibold text-xl'>Co Founder</span> of a DropShipping company and supervise and run it for 7 years.</p>
                <p className='text-green-400'>I tried my first <span className=' text-cyan-600 font-semibold text-3xl'>"Hello World"</span> and ended up loving it </p>
                <p>Learn or tried to learn how to code in order to automate it,After harsh regulatory changes we ended up closing shop and here we are, </p>  
              <p className='text-green-700'>I am finally found the time and the energy and motivation to do it full time.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
