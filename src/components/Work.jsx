import React from 'react'
import  brolyzFoto  from "../assets/work/brolyzMeet.png";
const Work = () => {
  return (
    <div name='work' className='w-full  text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work Experience
          </p>
          <div  className='h-12' >

          </div>
          <p className='text-2xl font-semibold inline text-gray-300'>
            Internship at VestraDAO
          </p>
          <div className='flex flex-col md:flex-col '>
          <p className='py-6'>I worked on tasks primarily in Brolyz, </p>
          <p className='py-6'>I was lucky enough to be a part of a great team, with their support I developed a deeper understanding of frontend architecture, reusable component design, and performance optimizations in React-based applications., </p>
          <p className='py-6'>Among other things I learned how to work within an agile development process, handling code reviews, pull requests, and version control best practices., </p>
          <p className='py-6'> Gained hands-on experience with state management, API integration, and component optimization, refining my problem-solving and debugging skills., </p>
          <p className='py-6'>I helped implement new features and resolved critical UI bugs, enhancing the stability and functionality of the platform, </p>
          <p className='py-6'>Also I collaborated closely with backend developers and designers to build responsive, user-friendly interfaces, improving the overall user experience.,</p>
          
         
          

          </div>
          </div>

          <div
    key={"index"}
    style={{ backgroundImage: `url(${brolyzFoto})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
       Brolyz
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={"https://vestradao.com/brolyz"} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Website
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={"https://www.linkedin.com/company/vestradao/posts/?feedView=all"} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Linkedin
          </button>
        </a>
      </div>
    </div>
  </div>
          </div>
          </div>
  )
}

export default Work