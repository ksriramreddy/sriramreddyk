import React, { useRef, useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import Project from './Project'
import {projects as data} from '../assets/data/data'
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
const Projects = () => {
    const [scrollPosition,setScrollPosition] = useState(0);
    const containerRef = useRef()
    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    };
    
  return (
    <div id='projects' className='  flex flex-col mt-10 gap-10 items-center h-screen w-full bg-black'>
        <div className=' text-4xl mt-10 font-mono'>
            <h1 className='  w-44 text-center  mx-auto'>My <span className='border-b-4 border border-l-transparent border-t-transparent border-r-transparent border-b-green-500'>Works</span></h1>
        </div>
        <div className='  pl-2 pr-2 flex flex-row items-center gap-3 justify-center md:justify-between bg-white  w-full   ' >
            <div className='text-center flex bg-black justify-center mt-10 '>
                <button onClick={()=>{handleScroll(-275)}} className=' text-green-500 text-4xl'><FaAngleDoubleLeft/></button>
            </div>
            <div  ref={containerRef} className='flex  project-scrollbar pb-5 pt-8 pl-2 bg-slate-400 width900 scroll-smooth mx-auto overflow overflow-x-scroll  flex-row  gap-3'>
                <div className='flex   flex-row gap-7 width1800 z-50'>
                    {
                        data.map((project, i)=>
                            <Project key={i} project={project}/>
                        )
                    }
                </div>
            </div>
            <div className='text-center flex gap-10 justify-center mt-10'>
                <button onClick={()=>{handleScroll(275)}} className=' text-green-500 text-4xl'><FaAngleDoubleRight/></button>
            </div>
        </div>
    </div>
  );
}

export default Projects;
