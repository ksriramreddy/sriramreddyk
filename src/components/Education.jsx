import React from 'react';
import {education as data} from '../assets/data/data'

const Education = () => {
  console.log(data);
  
  return (
    <div id='education' className='md:overflow-visible overflow-hidden  w-full relative'>
      <div className='w-full text-center  mb-10 text-4xl text-white title'>
        <h1>Education</h1>
      </div>
      <div className='w-full rounded-3xl edu-line relative h-full'>
        
        <div>
          <img className='clg-logo cmr' src="https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747811992/tb7xsgrlc0mm7odwpmwn.png" alt="" />
        </div>  
        <div>
          <img className='clg-logo gioe' src="https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747811984/zwdvvtnf1hzblehsa6kb.jpg" alt="" />
        </div>
        <div>
          <img className='clg-logo orbit' src="https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747811975/hj6bgdegicpvjgucqkum.webp" alt="" />
        </div>
        <div className=' p-5 border  edu edu-cmr lefttoright boxbg rounded-2xl   flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div>
              <img className='w-20' src="https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747811992/tb7xsgrlc0mm7odwpmwn.png" alt="" />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-xl'>{data[0].institution}</h1>
              <h1 className='text-sm opacity-80'>{data[0].degree}</h1>
              <h1 className='text-sm opacity-80'>{data[0].field}</h1>
              <h1 className='text-xs opacity-80'>{data[0].year}</h1>
            </div>
          </div>
          <div className='text-sm font-bold text-slate-400'> Grade : {data[0].gpa}</div>
          <div className='textstyle  '>{data[0].description }</div>
        </div>
        <div className=' p-5  edu-gioe border edu  righttoleft boxbg rounded-2xl m-3 flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div>
              <img className='w-20' src="https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747811984/zwdvvtnf1hzblehsa6kb.jpg" alt="" />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-xl'>{data[1].institution}</h1>
              <h1 className='text-sm opacity-80'>{data[1].degree}</h1>
              <h1 className='text-sm opacity-80'>{data[1].field}</h1>
              <h1 className='text-xs opacity-80'>{data[1].year}</h1>
            </div>
          </div>
          <div className='text-sm font-bold text-slate-400'> Grade : {data[1].gpa}</div>
          <div className='textstyle  '>{data[1].description }</div>
        </div>
        <div className=' p-5 border edu-orbit edu lefttoright boxbg rounded-2xl m-3 flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div>
              <img className='w-20' src="https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747811975/hj6bgdegicpvjgucqkum.webp" alt="" />
            </div>
            <div className='flex flex-col'>
              <h1 className='text-xl'>{data[2].institution}</h1>
              <h1 className='text-sm opacity-80'>{data[2].degree}</h1>
              <h1 className='text-sm opacity-80'>{data[2].field}</h1>
              <h1 className='text-xs opacity-80'>{data[2].year}</h1>
            </div>
          </div>
          <div className='text-sm font-bold text-slate-400'> Grade : {data[2].gpa}</div>
          <div className='textstyle'>{data[2].description }</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
