import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom'
import raviKumarLogo from '../assets/sriramLogo.png';
import { CiMenuFries } from "react-icons/ci";
import Sidebar from './Sidebar';


const Navbar = () => {
  const [isOpen,setIsOpen] = useState(1);
  const openSidebar = ()=>{
    setIsOpen(!isOpen);
  }
  return (
    <nav className=' scroll-smooth flex items-center justify-between h-24 fixed navbar    w-10/12 p-3 md:gap-3 '>
        <div className=' flex flex-shrink items-center '>
          
            <a href="/" aria-label='HOME'>
                {/* <span className='text-green-600 font-bold text-4xl  select-none ' id='openb'>{openb}</span>
                <span className=' text-3xl font-mono select-none'>Sriram</span>
                <span className='text-green-600 text-4xl select-none font-bold'>{slash}</span>
                <span className='text-3xl font-mono select-none'>Reddy</span>
                <span className='text-green-600 font-bold select-none text-4xl' id='closeb'>{closeb}</span>
                 */}
                 
                 <img className=' ' src="src/assets/Sriram-removebg-preview.png" alt="" width={250} />
            </a>
            
        </div>
        <div className=' flex gap-7 hidden md:block'>
            <a className='p-2 text-white text-xl  transition hover:text-green-500 duration-400 ease-in' href="#about"> About</a>
            <a className='p-2 text-white text-xl  transition duration-400 ease-in hover:text-green-500 ' href="#skill">Skills</a>
            <a className='p-2 text-white text-xl  transition hover:text-green-500 duration-400 ease-in' href="#projects"> Projects</a>
            <a className='p-2 text-white text-xl  transition hover:text-green-500 duration-400 ease-in' href="#education"> Education</a>
        </div>
        <div className=' gap-2 hidden lg:block'>
          <a className='p-3 border-2 border-green-500 bg-green-500 text-black font-bold rounded-l-2xl transition duration-500 ease-in greenshadow  ' href="">LinkedIn</a>
          <a className='p-3 border-2 border-green-500 font-bold bg-transparent rounded-r-2xl transition duration-500 ease-in greenshadow ' href="">GitHub</a>
        </div>
        <div className='block lg:hidden'>
          <button  onClick={openSidebar} className='text-black text-2xl px-2 py-2 rounded-2xl z-40 bg-green-500 hover:bg-green-600  transition duration-500 ease-in md:hidden'>
            <CiMenuFries/>
          </button>
           <div className={`${isOpen?" dropdown-menu-hide ":" dropdown-menu-show"}  transition-all duration-700`}>
            
            <div>
              <Sidebar/>
            </div>
          </div>
        </div>
          
         
    </nav>
  );
}

export default Navbar;
