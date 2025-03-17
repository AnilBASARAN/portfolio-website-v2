import React from 'react';
import { projectMernData } from "../data/projectMern.data.js";
import { projectJavaData } from "../data/projectJava.data.js";


const Projects = () => {

    // projects file
    const projectmern = projectMernData;
    const projectjava = projectJavaData;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <div className='flex flex-col md:justify-between md:flex-row '>
          <p className='py-6'>* Wait 45-60 seconds to fullstack app opens due to server ping</p>
          <p className='py-6'>* Projects created with Java Full Stack</p>

          </div>
        </div>
<div className='projects-all grid sm:grid-cols-2 gap-12' >
<div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          
          {/* Gird Item */}
          {projectmern.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
{/**/}
<div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          
          {/* Gird Item */}
          {projectjava.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        { item.github && <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>}
        {/* eslint-disable-next-line */}
        {/* I ADDED HERE item.live && to make sure if there is no live link it wont show the LIVE BUTTON */}
        { item.live &&
          <a href="your-link" target="_blank" rel="noreferrer">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
        }
      </div>
    </div>
  </div>
))}


</div>

</div>


      </div>
    </div>
  );
};

export default Projects;
