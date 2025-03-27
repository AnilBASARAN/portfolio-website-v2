import React from 'react';
import { projectMernData } from "../data/projectMern.data.js";
import { projectReactData } from "../data/projectJava.data.js";

const Projects = () => {
  const projectmern = projectMernData;
  const projectReact = projectReactData;

  return (
    <div name='projects' className='w-full text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <div className='flex flex-col md:justify-between md:flex-col'>
            <p className='py-6'>* NOTE: For todo app, Opening the app is not instant</p>
            <p className='py-6'>* Because it uses a live server it takes 45-60 seconds to open</p>
            <p className='py-6'>* You need to be logged in to see the plantApp,</p>
            <p className='py-6'>* If you don’t want to create an account,</p>
            <p className='py-6'>* Use username = "asdasd" and password = "123123"</p>
          </div>
        </div>

        <div className='projects-all grid sm:grid-cols-2 gap-12'>
          {/* MERN Projects */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
            {projectmern.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                           flex justify-center text-center items-center mx-auto content-div relative overflow-hidden"
              >
                {/* Transparent hover effect */}
                <div className="absolute w-full h-full bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </a>
                    )}
                    {item.live && (
                      <a href={item.live} target="_blank" rel="noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Live
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* React Projects */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
            {projectReact.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                           flex justify-center text-center items-center mx-auto content-div relative overflow-hidden"
              >
                {/* Transparent hover effect */}
                <div className="absolute w-full h-full bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center">
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Code
                        </button>
                      </a>
                    )}
                    {item.live && (
                      <a href={item.live} target="_blank" rel="noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                          Live
                        </button>
                      </a>
                    )}
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
