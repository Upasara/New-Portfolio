import { User } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { NotebookTabs } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

import { HomeIcon } from '../ui/home';
import { UserIcon } from '../ui/user';
import { FoldersIcon } from '../ui/folders';
import { FolderCodeIcon } from '../ui/folder-code';
import { ChevronsLeftRightIcon } from '../ui/chevrons-left-right';
import { LaptopMinimalCheckIcon } from '../ui/laptop-minimal-check';
import { ConnectIcon } from '../ui/connect';

const Navbar = ({ navigate }) => {
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
  <nav className='fixed bottom-10 z-50 left-1/2 -translate-x-1/2  rounded-full px-3 py-1 bg-white'>
   <ul className='flex gap-5 md:gap-7  '>
    {navItems.map((items) => (
     <li key={items.target} className='flex'>
      <Tooltip>
       <TooltipTrigger asChild>
        <button
         onClick={() => navigate(items.target)}
         className='group hover:-translate-y-2 hover:text-4xl duration-300 transition-all'
        >
         <div className=''>{items.icon}</div>
        </button>
       </TooltipTrigger>
       <TooltipContent className='bg-white text-black'>
        {items.label}
       </TooltipContent>
      </Tooltip>
     </li>
    ))}
   </ul>
  </nav>
 );
};

export default Navbar;
