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
    <div id='projects' className='flex flex-col  gap-10 justify-center items-center '>
        <div className=' text-4xl'>
            <h1 className=' text-center  mx-auto'>My <span className='border-b-4 border border-l-transparent border-t-transparent border-r-transparent border-b-green-500'>Works</span></h1>
        </div>
        <div className='  pl-2 pr-2 overflow-hidden  text gap-5  mx-auto w-full flex flex-wrap ' >
            {/* <div className='text-center    '>
                <button onClick={()=>{handleScroll(-275)}} className=' text-green-500 text-4xl'><FaAngleDoubleLeft/></button>
            </div>   */}
            {/* <div ref={containerRef} className='flex bg-yellow-200  project-scrollbar pb-5 pt-8 pl-2  width900 scroll-smooth'> */}
                {/* <div className='flex   flex-row gap-7 width1800 z-50'> */}
                    {
                        data.map((project, i)=>
                            <Project key={i} project={project} idx = {i}/>
                        )
                    }
                {/* </div> */}
            {/* </div> */}
            {/* <div className='text-center  '>
                <button onClick={()=>{handleScroll(275)}} className=' text-green-500 text-4xl'><FaAngleDoubleRight/></button>
            </div> */}
        </div>
    </div>
  );
}

export default Projects;
