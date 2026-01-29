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
import { Badge } from '../ui/badge';
import { LinkIcon } from '../ui/link';
import { useRef } from 'react';
import { GithubIcon } from '../ui/github';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
const projects = [
 {
  title: 'Smart Spend 💸',
  image: [SmartSpend, Emsys, WeatherSnap],
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, ',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Smart-Spend.git',
  link: 'https://smart-spend-delta-opal.vercel.app/',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'EMSys 👩🏻‍💻',
  image: [SmartSpend, Emsys, WeatherSnap],
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/EMSys.git',
  link: 'https://pemco-emsys.vercel.app/',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'Weather Snap 🌤️',
  image: [SmartSpend, Emsys, WeatherSnap],
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Weather-App.git',
  link: 'https://weather-app-rouge-ten-35.vercel.app/',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'TeFMaSys 🍃',
  image: [SmartSpend, Emsys, WeatherSnap],
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
  title: 'Smart Irrigation System 🌊',
  image: [SmartSpend, Emsys, WeatherSnap],
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Smart-Irrigation-System_IOT.git',
  link: '',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'Rathaya 🚗',
  image: [SmartSpend, Emsys, WeatherSnap],
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Rathaya.git',
  link: '',
  stack: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
 },
 {
  title: 'PEMcore 🖥️',
  image: [SmartSpend, Emsys, WeatherSnap],
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
   <h1
    className='text-center text-gradient font-poppins font-semibold text-4xl lg:text-5xl mb-5 pt-10 pb-10 '
    data-aos='fade-up'
   >
    Projects
   </h1>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
    {projects.map((project, i) => (
     <Drawer>
      <DrawerTrigger asChild>
       <div data-aos='fade-up' data-aos-delay={i * 100}>
        <Card
         key={i}
         className='p-0 hover:scale-105 transition-transform duration-300 hover:shadow-lg'
        >
         <CardHeader className='p-2.5 pb-0'>
          <Carousel
           plugins={[Autoplay({ delay: 3000 })]}
           className='shadow-md rounded-md w-full h-64  bg-transparent'
          >
           <CarouselContent>
            {project.image.map((img, i) => (
             <CarouselItem key={i}>
              <img
               src={img}
               alt={img}
               className='rounded-md w-full h-64 object-cover'
              />
             </CarouselItem>
            ))}
           </CarouselContent>
          </Carousel>
         </CardHeader>
         <CardContent className='px-5 pb-5 -mt-2'>
          <CardTitle className='pb-2 font-normal font-poppins tracking-wide text-shadow-2xs text-lg'>
           {project.title}
          </CardTitle>
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
            <div className='pb-5 text-justify'>{project.description}</div>
           </div>
           <div className='flex items-center justify-between px-2'>
            {project.github && (
             <Button
              variant='outline'
              size='sm'
              onClick={(e) => e.stopPropagation()}
              className='relative overflow-hidden border-2 border-purple-600 text-purple-600 shadow-sm hover:shadow-lg  transition-all 
           duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 
           before:w-0 before:rounded-sm before:bg-gradient-to-r before:from-fuchsia-600 before:via-purple-600 before:to-violet-600 before:duration-300 before:ease-out hover:text-white 
           hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80'
              onMouseEnter={() => iconRef2.current[i]?.startAnimation()}
              onMouseLeave={() => iconRef2.current[i]?.stopAnimation()}
             >
              <a href={project.github} className=''>
               <GithubIcon
                ref={(el) => (iconRef2.current[i] = el)}
                className='relative z-10 '
               />
              </a>
             </Button>
            )}
            {project.link && (
             <Button
              variant='outline'
              asChild
              size='sm'
              onClick={(e) => e.stopPropagation()}
              className=' relative overflow-hidden border-2 border-purple-600 text-purple-600 shadow-sm transition-all 
           duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 
           before:w-0 before:rounded-sm before:bg-gradient-to-r before:from-fuchsia-600 before:via-purple-600 before:to-violet-600 
           before:duration-500 before:ease-out hover:text-white hover:shadow-lg hover:before:h-40 hover:before:w-40 hover:before:opacity-80 '
              onMouseEnter={() => iconRef.current[i]?.startAnimation()}
              onMouseLeave={() => iconRef.current[i]?.stopAnimation()}
             >
              <a href={project.link} className='text-xs font-semibold '>
               <span className='relative z-10'>Live Demo</span>
               <LinkIcon
                ref={(el) => (iconRef.current[i] = el)}
                className='relative z-10'
               />
              </a>
             </Button>
            )}
           </div>
          </CardDescription>
         </CardContent>
        </Card>
       </div>
      </DrawerTrigger>
      <DrawerContent>{project.seeMore}</DrawerContent>
     </Drawer>
    ))}
   </div>
  </section>
 );
};

export default Projects;
