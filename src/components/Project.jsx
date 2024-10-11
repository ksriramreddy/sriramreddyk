import React from 'react';

const Project = ({project}) => {
  
  return (
    <>
      <div className='projectwidth projectheight  bg-slate-900 rounded-2xl  p-4 transition-all duration-1000 hover:-translate-y-4 flex  flex-col gap-3'>
        <div className='w-full project-animation'>
            <img className='w-full rounded-xl' src={project.image} alt="" />
        </div>
        <div>
          <div className='flex h-16 flex-wrap flex-row items-start'>
            {project.technologies.map((technology, index) => (
              <span key={index} className='textshadow m-1 text-xs text-green-500  bg-slate-800 p-1 pl-2 pr-2  rounded-lg '>{technology}</span>
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
      </div>
    </>
  );
}

export default Project;
