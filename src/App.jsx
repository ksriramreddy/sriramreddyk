import React from 'react';

import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Experience from './components/Experience';

function App() {
  return (
    <div  className='background scroll-smooth text-stone-300 antialiased'>
      {/* <img className='mage block z-0  ' width={'100%'} height={'100%'}  src="src/assets/chatgptme.png"  alt="" /> */}

      <div className=' flex flex-col scroll-smooth overflow-visible lg:w-10/12 sm:w-full mx-auto  '>
        <Navbar/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
      </div>
    </div>
    
  );
}

export default App;
