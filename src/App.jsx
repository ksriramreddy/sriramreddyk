import React from 'react';

import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div  className='background scroll-smooth w-screen text-stone-300 antialiased'>
      {/* <img className='mage block z-0  ' width={'100%'} height={'100%'}  src="src/assets/chatgptme.png"  alt="" /> */}
      <div className='fixed inset-0 -z-10'>
      {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      </div>
      <div className=' flex flex-col  scroll-smooth overflow-visible  container min-h-screen  lg:w-10/12   sm:w-full mx-auto  '>
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
      </div>
    </div>
    
  );
}

export default App;
