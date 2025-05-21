import React from 'react';
import {Typewriter,Cursor} from 'react-simple-typewriter'
import sriramreddy from '../assets/ksriramreddy.pdf'
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
    <div id='about' className='  flex items-start md:mt-56 mt-24  p-2  justify-around overflow-hidden  flex-col md:flex-row-reverse '>
      <div className='  -ml-5 lg:w-1/2  w-full h-56 md:h-auto lg:-ml-20  flex items-center justify-center '>
        <img className='mage drop-shadow-2l w-1/2 md:w-10/12' width={'100px'} height={'100px'}  src="src/assets/icons/srirambgwhite.png"  alt="" />
      </div>
      <div className='w-full font-mono pb-10'>
        <div className='w-full flex gap-4 flex-col md:text-left text-center'>
          <h1 className=' md:text-4xl text-3xl font-bold'>Hi<span className='text-green-500'>,</span> I am</h1>
          <h1 className=' md:text-4xl text-3xl font-bold'>Sriram Reddy</h1>
          <div className='flex lg:flex-row  flex-col w-full '>
            <h2 className=' md:text-2xl text-xl w-72 md:mx-0 mx-auto md:w-96  font-bold'> I am a &nbsp;
            {/* <Cursor cursorStyle='{' cursorBlinking={false}/>  */}
            <span className='text-green-500'>

            <Typewriter words={['Developer','Designer','Problem Solver']} loop={true}/>
            </span>
              <Cursor/>
              {/* <Cursor cursorStyle='}' cursorBlinking={false}/>  */}
            </h2>
            {/* <div className=''>
              <span className=' md:text-3xl text-2xl font-bold text-green-500' > 
                <Cursor cursorStyle='{' cursorBlinking={false}/> &nbsp;</span>
              <span className=' md:text-3xl text-xl font-bold text-green-500'>
              <Typewriter  words={['Developer','Designer','Problem Solver']} loop={true}/>
              <Cursor/>
              <Cursor cursorStyle='}' cursorBlinking={false}/>
              </span>
            </div> */}
          </div>
        </div>
        <div className='lg:w-2/3 text-lg my-5 text-ellipsis flex flex-col items-center justify-center w-full md:text-left text-center'>
          <h4 className='text-zinc-300 text-xl'>
          I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </h4>
        </div>
        <div className='mt-16 flex md:block items-center justify-center'>
          <a href={sriramreddy} className='p-4 border-green-500 rounded-xl hover:bg-black hover:text-white transition duration-700 ease-linear text-xl font-bold pl-9 pr-9   bg-green-500 greenshadow text-black ' download> Get Resume</a>
        </div>
      </div>
    </div>
  );
}

export default About;
