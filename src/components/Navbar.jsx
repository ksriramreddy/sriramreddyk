import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { CiMenuFries } from "react-icons/ci";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className='scroll-smooth flex items-center justify-between h-24 fixed navbar w-10/12 p-3 md:gap-3'>
      <div className='flex flex-shrink items-center'>
        <a href="/" aria-label='HOME'>
          <img src="https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747808738/ef8ltsvirvtca7atjq6m.png" alt="" width={250} />
        </a>
      </div>

      <div className='hidden md:block gap-7'>
        <a className='p-2 text-white text-xl transition hover:text-green-500 duration-400 ease-in' href="#about">About</a>
        <a className='p-2 text-white text-xl transition duration-400 ease-in hover:text-green-500' href="#skill">Skills</a>
        <a className='p-2 text-white text-xl transition duration-400 ease-in hover:text-green-500' href="#experience">Experience</a>
        <a className='p-2 text-white text-xl transition hover:text-green-500 duration-400 ease-in' href="#projects">Projects</a>
        <a className='p-2 text-white text-xl transition hover:text-green-500 duration-400 ease-in' href="#education">Education</a>
      </div>

      <div className='gap-2 hidden lg:block'>
        <a className='p-3 border-2 border-green-500 bg-green-500 text-black font-bold rounded-l-2xl transition duration-500 ease-in greenshadow' target='_blank' href="https://www.linkedin.com/in/sriram-reddy-34905a212/">LinkedIn</a>
        <a className='p-3 border-2 border-green-500 font-bold bg-transparent rounded-r-2xl transition duration-500 ease-in greenshadow' target='_blank' href="https://github.com/ksriramreddy">GitHub</a>
      </div>

      <div className='block lg:hidden'>
        <button onClick={() => setIsOpen(false)} className='text-black text-2xl px-2 py-2 rounded-2xl bg-green-500 hover:bg-green-600 transition duration-500 ease-in'>
          <CiMenuFries />
        </button>
        {!isOpen && createPortal(
          <Sidebar setIsOpen={setIsOpen} />,
          document.body
        )}
      </div>
    </nav>
  );
}

export default Navbar;
