import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { MdOutlineAccountCircle, MdOutlineWork } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';
import { LuListChecks } from 'react-icons/lu';
import { PiStudent } from 'react-icons/pi';
import { BsTelephone } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const navLinks = [
  { label: 'About',      href: '#about',      icon: <MdOutlineAccountCircle /> },
  { label: 'Skills',     href: '#skill',       icon: <GiBrain /> },
  { label: 'Experience', href: '#experience',  icon: <MdOutlineWork /> },
  { label: 'Projects',   href: '#projects',    icon: <LuListChecks /> },
  { label: 'Education',  href: '#education',   icon: <PiStudent /> },
  { label: 'Contact',    href: '#contact',     icon: <BsTelephone /> },
];

const Sidebar = ({ setIsOpen }) => {
  const close = () => setIsOpen(true);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-0 z-[999] flex justify-end"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={close}
        />

        {/* Panel */}
        <div className="relative z-10 w-72 h-full flex flex-col px-6 py-8 gap-8 border-l border-gray-700" style={{backgroundColor: '#000000', opacity: 1}}>
          {/* Header */}
          <div className="flex items-center justify-between">
            <img
              src="https://res.cloudinary.com/dqnmzdsoy/image/upload/v1747808738/ef8ltsvirvtca7atjq6m.png"
              alt="logo"
              width={160}
            />
            <button
              onClick={close}
              className="text-white text-2xl p-2 rounded-xl hover:bg-gray-800 transition"
            >
              <IoClose />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                onClick={close}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 text-lg font-medium hover:bg-gray-800 hover:text-green-400 transition duration-200"
              >
                <span className="text-green-500 text-2xl">{icon}</span>
                {label}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t border-gray-800" />

          {/* Social + CTA */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sriram-reddy-34905a212/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/ksriramreddy"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-green-500 text-green-400 font-bold hover:bg-green-500 hover:text-black transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
            <a
              href="https://drive.google.com/file/d/1W_1Gj1ixE3ulSQR10sxRDrfVAGRcI_UC/view"
              target="_blank"
              rel="noreferrer"
              className="text-center p-3 rounded-xl border border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 transition font-medium"
            >
              Get Resume
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
