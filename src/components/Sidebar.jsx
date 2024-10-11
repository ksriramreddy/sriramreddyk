import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { GiBrain } from "react-icons/gi";
import { MdOutlineAccountCircle } from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { LuListChecks } from 'react-icons/lu';
const isopen = 1;
const Sidebar = ({setIsOpen}) => {
  return (
    <div className=' block md:hidden'>
        <a onClick={setIsOpen} className={`p-2 text-green-500 text-4xl about  absolute   transition hover:text-green-500 duration-400 ease-in ${isopen?'block':'hidden top-0 right-0'}`} href="#about"><MdOutlineAccountCircle/></a>
        <a className={`p-2 text-green-500 text-4xl   skills absolute   transition-all duration-400 ease-in hover:text-red-500 ${isopen?'block':'hidden top-0 right-0'} `} href="#skill"><GiBrain/></a>
        <a className={`p-2 text-green-500 text-4xl projects absolute    transition hover:text-green-500 duration-400 ease-in ${isopen?'block':'hidden top-0 right-0'} `} href="#projects"> <LuListChecks/></a>
        <a className={`p-2 text-green-500 text-4xl education absolute    transition hover:text-green-500 duration-400 ease-in ${isopen?'block':'hidden top-0 right-0'} `} href="#education"> <PiStudent/></a>
    </div>
  );
}

export default Sidebar;
