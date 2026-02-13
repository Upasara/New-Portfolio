import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

import { HomeIcon } from '../ui/home';
import { UserIcon } from '../ui/user';
import { FoldersIcon } from '../ui/folders';
import { ChevronsLeftRightIcon } from '../ui/chevrons-left-right';
import { LaptopMinimalCheckIcon } from '../ui/laptop-minimal-check';
import { ConnectIcon } from '../ui/connect';

const Navbar = ({ navigate, activeSection }) => {
 const navItems = [
  {
   icon: <HomeIcon />,
   label: 'Home',
   target: 'hero',
  },
  { icon: <UserIcon />, label: 'About Me', target: 'bio' },
  { icon: <FoldersIcon />, label: 'Projects', target: 'projects' },
  { icon: <ChevronsLeftRightIcon />, label: 'Skills', target: 'skills' },
  {
   icon: <LaptopMinimalCheckIcon />,
   label: 'Experience',
   target: 'experience',
  },
  { icon: <ConnectIcon />, label: 'Contact', target: 'contact' },
 ];

 return (
  <nav className='fixed bottom-10 z-50 left-1/2 -translate-x-1/2  rounded-full px-3 py-1 bg-indigoo-100/80 backdrop-blur-[2px] shadow-md '>
   <ul className='flex gap-5 md:gap-7  '>
    {navItems.map((items) => (
     <li key={items.target} className='flex'>
      <Tooltip>
       <TooltipTrigger asChild>
        <button
         onClick={() => navigate(items.target, 1200)}
         className={`group hover:-translate-y-1 hover:text-4xl duration-300 transition-all ${
          activeSection === items.target
           ? 'text-indigoo-700  scale-110 text-shadow-md -translate-y-1'
           : 'text-indigoo-500 hover:text-indigoo-600 hover:-translate-y-1'
         }`}
        >
         {items.icon}
        </button>
       </TooltipTrigger>
       <TooltipContent className=''>{items.label}</TooltipContent>
      </Tooltip>
     </li>
    ))}
   </ul>
  </nav>
 );
};

export default Navbar;
