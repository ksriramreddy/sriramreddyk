import React from 'react';
import {Typewriter,Cursor} from 'react-simple-typewriter'
// import sriramreddy from '../../public/ksriramreddy-4.pdf'
import { animate, motion } from 'framer-motion';
import {frameMotion} from "../utils/frameMotion"
function About() {
  // const {text} = useTypewriter({
  //   words:['Developer','Designer','Problem Solver'],
  //   loop:{},
  //   typeSpeed:100,
  //   deleteSpeed: 150
  // })
  {/* <Typewriter 
          words={['Developer','Designer','Problem Solver']}
          loop={true}/> */}
  return (
    <div id='about' className=' flex items-start min-h-full mt-32 p-2  justify-around overflow-hidden  flex-col md:flex-row-reverse'>
      <div className='w-full bg-green-00  pb-10 z-10'>
        <div className='w-full flex gap-4 flex-col md:text-left text-center'>
          <h1 className=' md:text-4xl text-3xl font-bold'>Hi<span className='text-green-500'>,</span> I am</h1>
          <motion.h1 className='md:text-6xl text-6xl relative font-[900]'>Sriram Reddy <motion.span initial={{width:"40%"}} animate={{width:0}} transition={{duration:0.5,ease:"backIn"}} viewport={{once : false}} className='absolute left-0 h-[106%] bg-green-400'></motion.span></motion.h1>
          <div className='flex lg:flex-row  flex-col w-full '>
            <h2 className=' md:text-2xl text-xl w-72 md:mx-0 mx-auto md:w-[27rem]  font-bold'> I am a &nbsp;
            <span className='text-green-500 w-full '>

            <Typewriter words={['AI Engineer','Full Stack Developer','Problem Solver']} loop={true}/>
            </span>
              <Cursor/>
              {/* <Cursor cursorStyle='}' cursorBlinking={false}/>  */}
            </h2>
            
          </div>
        </div>
        <div className='lg:w-2/3 text-lg my-5 text-ellipsis   justify-center w-full md:text-left text-center'>
          <h4 className='text-gray-300  text-xl/8 max-w-[700px] '>
          A <span>Full-Stack Developer</span> and <span>AI Engineer</span> with professional experience building AI-powered solutions across industries like customer support, procurement, finance, and banking. Skilled in developing <span>LLM</span>-driven applications, <span>RAG</span> pipelines, and <span>AI Agents</span> that reduce human effort by up to 80%. Proficient in the <span>MERN</span> stack, <span>FastAPI</span>, and real-time systems using Socket.IO, with production deployments on Render and Vercel. Currently building industry-grade AI MVPs and contributing to <span>Lyzr GPT</span> at Lyzr AI.
          </h4>
        </div>
        <div className='mt-16 flex md:block items-center justify-center'>
          <a href="https://drive.google.com/file/d/1W_1Gj1ixE3ulSQR10sxRDrfVAGRcI_UC/view" className='p-4 border-green-500 rounded-xl hover:bg-black hover:text-white transition duration-700 ease-linear text-xl font-bold pl-9 pr-9   bg-green-500 greenshadow text-black ' download> Get Resume</a>
        </div>  
      </div>
    </div>
  );
}

export default About;
