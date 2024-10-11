import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaBootstrap, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { SiChakraui, SiRedux } from 'react-icons/si';

const Skills = () => {
  return (
    <div id='skill' className=' w-full bg-blackmx-5 px-10   '>
      <div className='text-4xl font-mono font-bold text-center mb-10'>
        <h1 className='text-white'><span className=' border border-b-4 border-r-transparent border-l-transparent border-t-transparent border-b-green-500'>Skill</span> - Set</h1>
      </div>
      <div className='w-full '>
        <div className=' baseline relative fullwidth flex-col   mx-auto justify-center'>
          <div className='flex boxdown  animation md:mt-0 mt-5 flex-wrap width w-1/2 border-1 flex-col  relative -left-3  '>
            <div className='boxbg rounded-xl hovereffect p-5'>
              <div className='text-center text-3xl font-bold'>
                <h1 >Frontend</h1>
              </div>
              <div className='flex flex-wrap gap-2 items-center justify-center'>
                <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce  '>
                  <span className='text-yellow-300 w-full text-xl pl-2 pr-1'><AiFillHtml5 /></span>
                  <h4>HTML</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce  '>
                  <span className='text-blue-500 w-full text-xl pl-2 pr-1'><FaCss3Alt /></span>
                  <h4>CSS</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce  '>
                  <span className='text-yellow-300 w-full text-xl pl-2 pr-1'><IoLogoJavascript /></span>
                  <h4>JavaScript</h4>
                </div>
                <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce  '>
                  <span className='text-blue-400 w-full text-xl pl-2 pr-1'><IoLogoReact /></span>
                  <h4 className=' min-w-full'>React Js</h4>
                </div>
                <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce  '>
                  <span className='text-violet-600 w-full text-xl pl-2 pr-1'><FaBootstrap /></span>
                  <h4 className=' min-w-full'>Bootstrap</h4>
                </div>
                <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce  '>
                  <span className='text-violet-700 w-full text-xl pl-2 pr-1'><SiRedux /></span>
                  <h4 className=' min-w-full'>Redux</h4>
                </div>
                <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-4 pr-3 border-zinc-400 bounce  '>
                  <span className='text-emerald-300 w-full text-xl '><SiChakraui /></span>
                  <h4 className=' min-w-full'>Chakra UI</h4>
                </div>
              </div>
                <span className='leftarrow'></span>
            </div>
          </div>
          <div className='flex boxdown  animation md:mt-0 mt-5 flex-wrap width w-1/2 border-1  flex-col gap-5 relative md:left-96 '>
          <div className='boxbg rounded-xl hovereffect  p-5'>
            <div className='text-center text-3xl font-bold'>
              <h1 >Frontend</h1>
            </div>
            <div className='flex flex-wrap gap-2 items-center justify-center'>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-1 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-yellow-300 w-full text-xl pl-2 pr-1'><AiFillHtml5 /></span>
                <h4>HTML</h4>
              </div>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-blue-500 w-full text-xl pl-2 pr-1'><FaCss3Alt /></span>
                <h4>CSS</h4>
              </div>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-yellow-300 w-full text-xl pl-2 pr-1'><IoLogoJavascript /></span>
                <h4>JavaScript</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-blue-400 w-full text-xl pl-2 pr-1'><IoLogoReact /></span>
                <h4 className=' min-w-full'>React Js</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-violet-600 w-full text-xl pl-2 pr-1'><FaBootstrap /></span>
                <h4 className=' min-w-full'>Bootstrap</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-violet-700 w-full text-xl pl-2 pr-1'><SiRedux /></span>
                <h4 className=' min-w-full'>Redux</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-4 pr-3 border-zinc-400 bounce '>
                <span className='text-emerald-300 w-full text-xl '><SiChakraui /></span>
                <h4 className=' min-w-full'>Chakra UI</h4>
              </div>
            </div>
            
            <span className='rightarrow'></span>
            </div>
          </div>
          <div className='flex boxdown animation md:mt-0 mt-5 flex-wrap width w-1/2 border-1  flex-col gap-5 relative -left-3 '>
          <div className='boxbg rounded-xl hovereffect p-5'>
            <div className='text-center text-3xl font-bold'>
              <h1 >Frontend</h1>
            </div>
            <div className='flex flex-wrap gap-2 items-center justify-center'>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-1 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-yellow-300 w-full text-xl pl-2 pr-1'><AiFillHtml5 /></span>
                <h4>HTML</h4>
              </div>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-blue-500 w-full text-xl pl-2 pr-1'><FaCss3Alt /></span>
                <h4>CSS</h4>
              </div>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-yellow-300 w-full text-xl pl-2 pr-1'><IoLogoJavascript /></span>
                <h4>JavaScript</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-blue-400 w-full text-xl pl-2 pr-1'><IoLogoReact /></span>
                <h4 className=' min-w-full'>React Js</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-violet-600 w-full text-xl pl-2 pr-1'><FaBootstrap /></span>
                <h4 className=' min-w-full'>Bootstrap</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-violet-700 w-full text-xl pl-2 pr-1'><SiRedux /></span>
                <h4 className=' min-w-full'>Redux</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-4 pr-3 border-zinc-400 bounce '>
                <span className='text-emerald-300 w-full text-xl '><SiChakraui /></span>
                <h4 className=' min-w-full'>Chakra UI</h4>
              </div>
            </div>
            </div>
            <span className='leftarrow'></span>
          </div>
          <div className='flex boxdown animation md:mt-0 mt-5 flex-wrap width w-1/2 border-1  flex-col gap-5 relative md:left-96 '>
          <div className='boxbg rounded-xl hovereffect p-5'>
            <div className='text-center text-3xl font-bold '>
              <h1 >Frontend</h1>
            </div>
            <div className='flex flex-wrap gap-2 items-center justify-center'>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-1 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-yellow-300 w-full text-xl pl-2 pr-1'><AiFillHtml5 /></span>
                <h4>HTML</h4>
              </div>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-blue-500 w-full text-xl pl-2 pr-1'><FaCss3Alt /></span>
                <h4>CSS</h4>
              </div>
              <div className='flex flex-row max-w-fit items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-yellow-300 w-full text-xl pl-2 pr-1'><IoLogoJavascript /></span>
                <h4>JavaScript</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-blue-400 w-full text-xl pl-2 pr-1'><IoLogoReact /></span>
                <h4 className=' min-w-full'>React Js</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-violet-600 w-full text-xl pl-2 pr-1'><FaBootstrap /></span>
                <h4 className=' min-w-full'>Bootstrap</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-3 pr-3 border-zinc-400 bounce '>
                <span className='text-violet-700 w-full text-xl pl-2 pr-1'><SiRedux /></span>
                <h4 className=' min-w-full'>Redux</h4>
              </div>
              <div className='flex flex-row  items-center justify-center gap-1 border rounded-lg p-2 pl-4 pr-3 border-zinc-400 bounce '>
                <span className='text-emerald-300 w-full text-xl '><SiChakraui /></span>
                <h4 className=' min-w-full'>Chakra UI</h4>
              </div>
            </div>
            
            <span className='rightarrow'></span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
