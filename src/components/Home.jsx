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
I started my career as a Survey Engineer, working on large-scale projects like bullet train paths, highways, and skyscrapers. But curiosity led me elsewhere. After nearly a decade in construction, I co-founded an e-commerce company, ran it successfully for over seven years, and handled everything from Amazon operations to supplier management.
</p>

<p className='text-[#8892b0] py-4 max-w-[700px]'>
That’s where my journey into coding began. I built our company’s website, fell in love with web development, and fully immersed myself in programming. From Java and Spring to Node.js, MongoDB, and React, I kept exploring—until I realized frontend development was my real passion. I even learned Go just to keep up with the backend stack at the startup where I interned.
</p>
<p className='text-[#8892b0] py-4 max-w-[700px]'>
Now, I focus on crafting clean, responsive, and scalable web applications. I specialize in React, TypeScript, and modern web technologies, constantly pushing myself to learn, iterate, and build better experiences.

When I'm not coding, you’ll find me lifting weights, experimenting in the kitchen, or solving tricky Codewars and LeetCode challenges.
</p>
        
        <p className='text-pink-600 text-sm mb-4'>Almost 40 years of experience.</p>
   
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
