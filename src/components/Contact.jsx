import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedin, FaSquareTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { SiGmail } from 'react-icons/si';
import { IoCheckmarkCircle, IoCloseCircle, IoClose } from 'react-icons/io5';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 5000);
    }).catch(() => {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <div className='h-screen mt-10 pb-10 relative'>
      {/* Toast Popup */}
      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl min-w-72 max-w-sm ${
              status === 'success'
                ? 'bg-gray-900 border border-green-500'
                : 'bg-gray-900 border border-red-500'
            }`}
            style={{ boxShadow: status === 'success' ? '0px 0px 24px 4px rgba(0,255,77,0.3)' : '0px 0px 24px 4px rgba(255,50,50,0.3)' }}
          >
            <span className={`text-3xl shrink-0 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {status === 'success' ? <IoCheckmarkCircle /> : <IoCloseCircle />}
            </span>
            <div className='flex flex-col'>
              <span className={`font-bold text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {status === 'success' ? 'Message Sent!' : 'Failed to Send'}
              </span>
              <span className='text-gray-300 text-xs'>
                {status === 'success'
                  ? "Thanks for reaching out. I'll get back to you soon."
                  : 'Something went wrong. Please try again.'}
              </span>
            </div>
            <button onClick={() => setStatus('idle')} className='ml-auto text-gray-500 hover:text-white transition'>
              <IoClose />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className='w-full  mt-14 flex flex-col gap-10 justify-center items-center '>
        <div className='w-full text-center text-white text-5xl'>
          <h1 >Contact</h1>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className=' inputdiv flex flex-col gap-5 md:w-1/3 p-6 boxbg rounded-lg' >
          <h2 className='text-white text-3xl'>Let's Connect</h2>
          <input required className='input bgbox' placeholder='Your email' type="email" name="from_email" />
          <input required className='input bgbox' placeholder='Your name' type="text" name="from_name" />
          <textarea required className='input bgbox message' placeholder='Text message' name="message" />
          <button
            type="submit"
            disabled={status === 'loading'}
            className='p-4 border-green-500 rounded-xl text-xl font-bold pl-9 pr-9 bg-green-500 greenshadow text-black disabled:opacity-60 disabled:cursor-not-allowed transition duration-300'
          >
            {status === 'loading' ? 'Sending...' : 'Connect'}
          </button>
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
        </form>

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
