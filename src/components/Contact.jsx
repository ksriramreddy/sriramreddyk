import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedin, FaSquareTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  return (
    <div className='h-screen mt-10 pb-10  '>
      <div className='w-full  mt-14 flex flex-col gap-10 justify-center items-center '>
        <div className='w-full text-center text-white text-5xl'>
          <h1 >Contact</h1>
        </div>
        <div className=' inputdiv flex flex-col gap-5 md:w-1/3 p-6 boxbg rounded-lg' >
          <h2 className='text-white text-3xl'>Let's Connect</h2>
          <input className='input bgbox' placeholder='Your email' type="email" name="" id="" />
          <input className='input bgbox' placeholder='Your name' type="text" name="" id="" />
          <textarea className='input bgbox message' placeholder='Text message' type="text" name="" id="" />
          <button className='p-4 border-green-500 rounded-xl  text-xl font-bold pl-9 pr-9   bg-green-500 greenshadow text-black'>Connect</button>
          <h1 className='text-center text-lg text-slate-400'>or</h1>
          <div className=' flex flex-row flex-wrap mx-auto items-center justify-center gap-5'>
            <div className='dmdiv  text-red-500'>
              <a href="mailto:sriramreddy9@gmail.com" target='_blank' className='dm'>
                <SiGmail />
              </a>
            </div>
            <div className='dmdiv  text-green-600'>
              <a target='_blank' className='dm' href="https://wa.me/+916303471489?text=Hey%20Brother!!!%20%20i%20have%20gone%20through%20your%20profolio ">
                <BsWhatsapp />
              </a>
            </div>
            <div className='dmdiv  text-blue-500'>
              <a href="https://twitter.com/messages/" target='_blank' className='dm'>
                <FaSquareTwitter />
              </a>
            </div>
            <div className='dmdiv  instagram'>
              <a href="https://ig.me/m/sriramreddy" target='_blank' className='dm sm'>
                <GrInstagram />
              </a>
            </div>
            <div className='dmdiv  text-blue-500'>
              <a href="" className='dm'>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className=' w-full flex flex-col items-center justify-center'>
          <div className=' flex items-center justify-center'>
            <div>
              <img src="src/assets/Sriram-removebg-preview.png" alt="" />
            </div>
          </div>

          <div className=' flex justify-center items-center  '>
            <a className='p-2 text-white text-xl  transition hover:text-green-500 duration-400 ease-in' href="#about"> About</a>
            <a className='p-2 text-white text-xl  transition duration-400 ease-in hover:text-green-500 ' href="#skill">Skills</a>
            <a className='p-2 text-white text-xl  transition hover:text-green-500 duration-400 ease-in' href="#projects"> Projects</a>
            <a className='p-2 text-white text-xl  transition hover:text-green-500 duration-400 ease-in' href="#education"> Education</a>
          </div>

          <div className='flex text-center  text-2xl  mt-5 items-center justify-center gap-10'>

            <div className='hover:text-green-400 trasition duration-500 '>
              <a target='_blank' href="https://wa.me/+916303471489?text=Hey%20Brother!!!%20%20i%20have%20gone%20through%20your%20profolio ">
                <BsWhatsapp />
              </a>
            </div>
            <div className='hover:text-green-400 trasition duration-500  '>
              <a href="https://twitter.com/messages/" target='_blank' >
                <FaSquareTwitter />
              </a>
            </div>
            <div className='hover:text-green-400 trasition duration-500  '>
              <a href="" >
                <FaLinkedin />
              </a>
            </div>
            <div className='hover:text-green-400 trasition duration-500  '>
              <a href="https://ig.me/m/sriramreddy" target='_blank' >
                <GrInstagram />
              </a>
            </div>

          </div>
          <div>
            <h1 className='text-center text-sm  text-slate-400 mt-10 mb-10'>© 2024 Sriram Reddy. All rights reserved.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
