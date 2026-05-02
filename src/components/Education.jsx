import React from 'react';
import { motion } from 'framer-motion';
import { frameMotion } from '../utils/frameMotion';
import { education as data } from '../assets/data/data';

const Education = () => {
  return (
    <div id='education' className='w-full py-20 px-4 overflow-hidden' style={{ background: '#000' }}>
      <div className='w-full text-center mb-14 text-4xl text-white title'>
        <h1>Education</h1>
      </div>

      <div className='relative max-w-4xl mx-auto'>
        {/* Timeline line — hidden on mobile */}
        <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-white/20 rounded-full -translate-x-1/2'
          style={{ boxShadow: '0px 0px 20px 3px rgba(0,255,77,0.3)' }} />

        <div className='flex flex-col gap-10'>
          {data.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                variants={frameMotion(0, 0, isLeft ? -80 : 80, 0.4)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false }}
                className={`relative flex flex-col md:flex-row items-center gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Card */}
                <div className='w-full md:w-[46%] boxbg rounded-2xl p-5 flex flex-col gap-3 border border-gray-700'>
                  <div className='flex items-center gap-3'>
                    <img
                      src={item.image}
                      alt={item.institution}
                      className='w-14 h-14 rounded-full object-cover border-2 border-white shrink-0'
                    />
                    <div>
                      <h2 className='text-white text-lg font-bold leading-tight'>{item.institution}</h2>
                      <p className='text-green-400 text-sm font-medium'>{item.degree}</p>
                      <p className='text-gray-400 text-xs'>{item.field}</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-between text-xs text-gray-400'>
                    <span>{item.year}</span>
                    <span className='text-green-400 font-semibold'>{item.gpa}</span>
                  </div>
                  <p className='text-gray-400 text-sm leading-relaxed'>{item.description}</p>
                </div>

                {/* Center dot — desktop only */}
                <div className='hidden md:flex w-[8%] justify-center'>
                  <div className='w-4 h-4 rounded-full bg-green-400 border-2 border-black z-10'
                    style={{ boxShadow: '0px 0px 12px 3px rgba(0,255,77,0.6)' }} />
                </div>

                {/* Spacer for opposite side */}
                <div className='hidden md:block w-[46%]' />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
