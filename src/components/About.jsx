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

            <Typewriter words={['AI/ML enthusiast','Problem Solver',"Full Stack Developer"]} loop={true}/>
            </span>
              <Cursor/>
              {/* <Cursor cursorStyle='}' cursorBlinking={false}/>  */}
            </h2>
            
          </div>
        </div>
        <div className='lg:w-2/3 text-lg my-5 text-ellipsis   justify-center w-full md:text-left text-center'>
          <h4 className='text-gray-300  text-xl/8 max-w-[700px] '>
          A highly motivated <span>Full-Stack Developer</span> and <span>AI/ML</span>  enthusiast with hands-on experience building real-time and scalable web applications using the <span>MERN</span>  stack. Proficient in developing responsive user interfaces, secure backend APIs, and real-time communication using Socket.IO. I have experience working with <span>LLMs</span>, <span>RAG</span> pipelines,<span>OpenAI</span>  APIs, FAISS <span>vectorDBs</span>, and deploying production-ready apps on Render and Vercel. Passionate about integrating AI into full-stack apps to solve real-world problems through technology.
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
