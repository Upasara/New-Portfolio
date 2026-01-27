import React from 'react';
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '../ui/card';

import SmartSpend from '../../assets/projects/smart-spend.png';
import Emsys from '../../assets/projects/emsys2.png';
import WeatherSnap from '../../assets/projects/weather-snap.png';
import { Button } from '../ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Github } from 'lucide-react';
import { Badge } from '../ui/badge';
import { LinkIcon } from '../ui/link';
import { useRef } from 'react';
import { GithubIcon } from '../ui/github';

const projects = [
 {
  title: 'Smart Spend',
  image: SmartSpend,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, ',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Smart-Spend.git',
  link: 'https://smart-spend-delta-opal.vercel.app/',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'EMSys',
  image: Emsys,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/EMSys.git',
  link: 'https://pemco-emsys.vercel.app/',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'Weather Snap',
  image: WeatherSnap,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Weather-App.git',
  link: 'https://weather-app-rouge-ten-35.vercel.app/',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'TeFMaSys',
  image: SmartSpend,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github:
   'https://github.com/Upasara/Tea_Farmer_Management_System-Mobile_App.git',
  link: '',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'Smart Irrigation System',
  image: SmartSpend,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Smart-Irrigation-System_IOT.git',
  link: '',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'Rathaya',
  image: SmartSpend,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Rathaya.git',
  link: '',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'PEMcore',
  image: SmartSpend,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/PEMcore.git',
  link: '',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
];

const Projects = ({ id }) => {
 const iconRef = useRef([]);
 const iconRef2 = useRef([]);
 return (
  <section id={id} className='min-h-screen p-5 md:p-10 lg:px-20 '>
   <h1 className='text-center text-gradient font-poppins font-semibold text-4xl lg:text-5xl mb-5 pt-10 pb-10'>
    Projects
   </h1>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
    {projects.map((project, i) => (
     <Card key={i} className='p-0'>
      <CardHeader className='p-2.5 pb-0'>
       <img
        src={project.image}
        className='rounded-md shadow-sm w-full h-64 object-cover'
       />
      </CardHeader>
      <CardContent className='px-5 pb-5 -mt-4'>
       <CardTitle className='pb-2 '>{project.title}</CardTitle>
       <CardDescription>
        <div>
         {/* Tech Stack */}
         <div className='flex flex-wrap gap-1.5 pb-2'>
          {project.stack.map((tech, i) => (
           <Badge key={i} variant='secondary'>
            {tech}
           </Badge>
          ))}
         </div>
         <div className='pb-5 text-justify'>
          {project.description}
          <Drawer>
           <DrawerTrigger asChild>
            <button className='cursor-pointer ml-2 font-semibold font-mono'>
             See more...
            </button>
           </DrawerTrigger>
           <DrawerContent>{project.seeMore}</DrawerContent>
          </Drawer>
         </div>
        </div>
        <div className='flex items-center justify-between px-2'>
         {project.github && (
          <Button
           variant='outline'
           size='sm'
           className='bg-gradient text-white lg:text-white/70 border-0 hover:text-white   hover:shadow-lg  '
           onMouseEnter={() => iconRef2.current[i]?.startAnimation()}
           onMouseLeave={() => iconRef2.current[i]?.stopAnimation()}
          >
           <a href={project.github} className='text-xs'>
            <GithubIcon ref={(el) => (iconRef2.current[i] = el)} />
           </a>
          </Button>
         )}
         {project.link && (
          <Button
           variant='outline'
           asChild
           size='sm'
           className='bg-gradient text-white lg:text-white/70 border-0 hover:text-white    '
           onMouseEnter={() => iconRef.current[i]?.startAnimation()}
           onMouseLeave={() => iconRef.current[i]?.stopAnimation()}
          >
           <a href={project.link} className='text-xs font-semibold '>
            Live Demo <LinkIcon ref={(el) => (iconRef.current[i] = el)} />
           </a>
          </Button>
         )}
        </div>
       </CardDescription>
      </CardContent>
     </Card>
    ))}
   </div>
  </section>
 );
};

export default Projects;
