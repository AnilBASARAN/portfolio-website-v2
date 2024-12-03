import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full  h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center m-12 items-center md:w-full md:h-full w-196'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='  pb-8 pl-4 mt-12'>
            <p className='text-4xl font-bold inline border-b-4  border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] text-left  w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='flex items-end sm:text-center text-xl sm:text-4xl font-bold'>
              <p>Hi. I'm Anil Basaran, nice to meet you. Please take a look around.</p>
            </div>
            <div className='flex  justify-center sm:text-center'>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
