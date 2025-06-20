import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCPlusPlus, BiLogoTailwindCss } from 'react-icons/bi';
import { FaBootstrap, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { FaDatabase, FaGitAlt, FaGithub, FaJava, FaPython } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoFigma, IoLogoReact } from 'react-icons/io5';
import { PiMicrosoftPowerpointLogo, PiMicrosoftPowerpointLogoFill } from 'react-icons/pi';
import { SiApifox, SiAppwrite, SiCanva, SiChakraui, SiExpress, SiFirebase, SiMongodb, SiMysql, SiRedux, SiSqlite } from 'react-icons/si';
import { TbApi, TbBrandSocketIo, TbHexagonLetterCFilled } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { VscVscode } from 'react-icons/vsc';
import { frameMotion } from "../utils/frameMotion"


const Skills = () => {

  return (
    <motion.div transition="transiotion" id='skill' className=' w-full  px-10 mb-10  '>
      <motion.div variants={frameMotion(.5)} initial="hidden" whileInView="show" viewport={{ margin: "100px", once: false }} className='text-4xl  font-bold text-center mb-10'>
        <h1 className='text-white'><span className=' border border-b-4 border-r-transparent border-l-transparent border-t-transparent border-b-green-500 text-red-500'>Skill</span> - Set</h1>
      </motion.div>

      <div className=' overflow-hidden'>
        <div className='  flex flex-row flex-wrap gap-10 pt-12 justify-center items-center'>
          <motion.div variants={frameMotion(.3,100,100,0.3)} initial="hidden" whileInView="show" viewport={{ margin: "30px", once: false }}  id='tilt' className='flex tilt    md:mt-0   flex-wrap max-w-96 border-1  flex-col     '>
            <div className='boxbg rounded-xl flex flex-col gap-4 hovereffect p-5'>
              <div className='text-center text-3xl font-bold'>
                <h1 >Frontend</h1>
              </div>
              <div className='flex flex-wrap gap-2 items-center justify-center'>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-yellow-300  '><AiFillHtml5 /></span>
                  <h4>HTML</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-blue-500 '><FaCss3Alt /></span>
                  <h4>CSS</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-blue-500 '><BiLogoTailwindCss /></span>
                  <h4>Tailwind</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-yellow-300'><IoLogoJavascript /></span>
                  <h4>JavaScript</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-blue-400'><IoLogoReact /></span>
                  <h4 className=' '>React Js</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-violet-600'><FaBootstrap /></span>
                  <h4 className=' '>Bootstrap</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-violet-700'><SiRedux /></span>
                  <h4 className=' '>Redux</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-emerald-300  '><SiChakraui /></span>
                  <h4 className=' '>ChakraUI</h4>
                </div>
              </div>
              <span className='leftarrow'></span>
            </div>
          </motion.div>
          <motion.div variants={frameMotion(.4,100,-100,0.3)} initial="hidden" whileInView="show" viewport={{margin : "30px", once:false}}   className='flex    md:mt-0  flex-wrap max-w-96 border-1  flex-col gap-5'>
            <div className='boxbg rounded-xl flex flex-col gap-4 hovereffect  p-5'>
              <div className='text-center text-3xl font-bold'>
                <h1 >Backend</h1>
              </div>
              <div className='flex flex-wrap gap-2 items-center justify-center'>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-green-500  '><FaNodeJs /></span>
                  <h4>Node.Js</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-blue-500 '><SiExpress /></span>
                  <h4>Express.Js</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-yellow-300'><IoLogoJavascript /></span>
                  <h4>JavaScript</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-green-500'><SiMongodb /></span>
                  <h4 className=' '>MongoDB</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-violet-600'><FaDatabase /></span>
                  <h4 className=' '>SQL</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-white'><TbBrandSocketIo /></span>
                  <h4 className=' '>Socket.io</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-violet-700'><TbApi /></span>
                  <h4 className=' '>API</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-red-600  '><SiFirebase /></span>
                  <h4 className=' '>Firebase</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-pink-500  '><SiAppwrite /></span>
                  <h4 className=' '>Appwrite</h4>
                </div>
              </div>

              <span className='rightarrow'></span>
            </div>
          </motion.div>
          <motion.div variants={frameMotion(.5,-100,100,0.3)} initial="hidden" whileInView="show" viewport={{margin : "100px", once:false}}  className='flex   md:mt-0  flex-wrap max-w-96 border-1  flex-col gap-5   '>
            <div className='boxbg rounded-xl flex flex-col gap-4 hovereffect p-5'>
              <div className='text-center text-3xl font-bold'>
                <h1 >Programming</h1>
              </div>
              <div className='flex flex-wrap gap-2 items-center justify-center'>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-blue-400  '><TbHexagonLetterCFilled /></span>
                  <h4>C</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-blue-500 '><BiLogoCPlusPlus /></span>
                  <h4>C++</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-yellow-300'><IoLogoJavascript /></span>
                  <h4>JavaScript</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-yellow-400'><FaPython /></span>
                  <h4 className=' '>Python</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-orange-400'><FaJava /></span>
                  <h4 className=' '>Java</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-violet-200 text-2xl'><SiMysql /></span>
                  <h4 className=' '>MySQL</h4>
                </div>
              </div>
            </div>
            <span className='leftarrow'></span>
          </motion.div>
          <motion.div variants={frameMotion(.6,-100,-100,0.3)} initial="hidden" whileInView="show" viewport={{margin : "100px", once:false}}  className='flex   md:mt-0  flex-wrap max-w-96 border-1  flex-col gap-5     '>
            <div className='boxbg rounded-xl flex flex-col gap-4 hovereffect p-5'>
              <div className='text-center text-3xl font-bold '>
                <h1 >Others</h1>
              </div>
              <div className='flex flex-wrap gap-2 items-center justify-center'>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-red-400  '><FaGitAlt /></span>
                  <h4>Git</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-white '><FaGithub /></span>
                  <h4>GitHub</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-blue-500'><VscVscode /></span>
                  <h4>VS Code</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='instagram'><IoLogoFigma /></span>
                  <h4 className=' '>Figma</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-violet-600'><SiCanva /></span>
                  <h4 className=' '>Canva</h4>
                </div>
                <div className='flex flex-row max-w-fit items-center justify-between border rounded-lg  border-zinc-400 bounce  '>
                  <span className='text-red-500'><PiMicrosoftPowerpointLogoFill /></span>
                  <h4 className=' '>PPT</h4>
                </div>

              </div>

              <span className='rightarrow'></span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
