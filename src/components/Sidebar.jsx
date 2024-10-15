import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { GiBrain } from "react-icons/gi";
import { MdOutlineAccountCircle } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { LuListChecks } from 'react-icons/lu';
const isopen = 1;
const Sidebar = ({setIsOpen}) => {
  const box = 'border p-2 rounded-full'
  const one = 'left-10'
  const two = 'left-10'
  const three = 'left-10'
  const four = 'left-10'
  return (
    <div className='md:hidden gap-2 flex flex-col'>
        <a onClick={setIsOpen} className={`p-2 text-green-500 text-4xl about  ${box}    transition hover:text-green-500 duration-400 ease-in ${isopen?`block ${one}`:'hidden top-0 right-0'}`} href="#about"><MdOutlineAccountCircle/></a>
        <a className={`p-2 ${box} text-green-500 text-4xl   skills    transition-all duration-400 ease-in hover:text-red-500 ${isopen? `block ${one}`:'hidden top-0 right-0'} `} href="#skill"><GiBrain/></a>
        <a className={`p-2 ${box} text-green-500 text-4xl projects     transition hover:text-green-500 duration-400 ease-in ${isopen?`block ${one}`:'hidden top-0 right-0'} `} href="#projects"> <LuListChecks/></a>
        <a className={`p-2 ${box} text-green-500 text-4xl education     transition hover:text-green-500 duration-400 ease-in ${isopen? `block ${one}`:'hidden top-0 right-0'} `} href="#education"> <PiStudent/></a>
    </div>
  );
}

export default Sidebar;
