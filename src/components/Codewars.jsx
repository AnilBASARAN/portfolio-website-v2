import React from 'react';
import { codewarsdata } from "../data/codewars.data.js";
import { codewarsdata2 } from "../data/codewars.data2.js";


const Work = () => {

    // projects file
    const project = codewarsdata;
    const project2 = codewarsdata2;
    //setProject(data);
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-red-00  bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col  justify-center w-full h-full'>
        <div className='pb-8 m-12'>
          <p className='text-4xl font-bold inline border-b-4  text-gray-300 border-pink-600'>
            Codewars
          </p>
          <div className='flex flex-col md:justify-between md:flex-row'>
          <p className='py-6'> These are some of the problems and solutions that I came up with at Codewars </p>
          

          </div>
        </div>
<div className='projects-all grid sm:grid-cols-2 gap-12 ' >
<div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          
          {/* Gird Item */}
          {project.map((item, index) => (
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
          {project2.map((item, index) => (
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

</div>


      </div>
    </div>
  );
};

export default Work;
