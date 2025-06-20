import React from 'react';
import { motion } from 'framer-motion';
import {frameMotion} from "../utils/frameMotion"
const Project = ({project , idx}) => {
  console.log(idx);
  const x = idx%2==0? -300 : 300
  const y = idx%2!=0? 100 : -100

  return (
    <>
      <motion.div variants={frameMotion(0,0,x,0.2)} initial="hidden" whileInView="show" viewport={{ margin: "10px", once: false }}className='projectwidth  bg-gray-900 rounded-3xl  p-4 transition-all duration-500 hover:-translate-y-4 gap-3'>
        <div className='w-full project-animation'>
            <img className='w-full md:h-[240px] rounded-xl' src={project.image} alt="" />
        </div>
        <div>
          <div className='flex h-16 flex-wrap flex-row items-start'>
            {project.technologies.map((technology, index) => (
              <span key={index} className='textshadow m-1 text-xs text-green-500   p-1 pl-2 pr-2  rounded-lg '>{technology}</span>
            ))}
          </div>
        </div>
        <div className='text-2xl '>
            <h1>{project.title}</h1>
        </div>
        <div className='h-16  text-sm opacity-70 overflow-hidden text-ellipsis description'>
          {project.description}
        </div>
        <div className=' flex flex-row gap-4 mt-2'>
          <a href={project.code} target='_blank' className='p-2 border-green-500 rounded-lg  text-sm font-bold    bg-green-400 text-black'>Code</a >
          <a href={project.demo} target='_blank' className='p-2 border-green-500 rounded-lg  text-sm font-bold    bg-green-400 text-black'>Demo</a >
        </div>
      </motion.div>
    </>
  );
}

export default Project;
