 import React from 'react';
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from '../ui/card';

import SmartSpend from '../../assets/projects/smart-spend.png';
import { Button } from '../ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer';
import { Github } from 'lucide-react';
import ElectricBorder from '../ElectricBorder';

const projects = [
 {
  title: 'Smart Spend',
  image: SmartSpend,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Smart-Spend.git',
  link: 'https://smart-spend-delta-opal.vercel.app/',
 },
 {
  title: 'EMSys',
  image: SmartSpend,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/EMSys.git',
  link: 'https://pemco-emsys.vercel.app/',
 },
 {
  title: 'Weather App',
  image: SmartSpend,
  description:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  seeMore:
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corrupti beatae voluptas error vel, maiores fuga? Fuga totam sequi recusandae sit maxime qui, labore culpa, nam omnis provident quae in?',
  github: 'https://github.com/Upasara/Weather-App.git',
  link: 'https://weather-app-rouge-ten-35.vercel.app/',
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
 },
];

const Projects = ({ id }) => {
 return (
  <section id={id} className='min-h-screen p-5 md:p-10 '>
   <h1 className='text-center text-gradient font-poppins font-semibold text-4xl lg:text-5xl mb-5 pt-10 pb-10'>Projects</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
    {projects.map((project, i) => (
    <ElectricBorder color="#7df9ff"
  speed={1}
  chaos={0.12}
  thickness={2}>
     <Card key={i} className=''>
      <CardHeader>
       <img src={project.image} className='rounded-md shadow-md' />
      </CardHeader>
      <CardContent>
       <CardTitle>{project.title}</CardTitle>
       <CardDescription>
        <div>
         <div>{project.description}</div>
         <div>
          <Drawer>
           <DrawerTrigger asChild>
            <Button variant='ghost'>See more...</Button>
           </DrawerTrigger>
           <DrawerContent>{project.seeMore}</DrawerContent>
          </Drawer>
         </div>
        </div>
       </CardDescription>
      </CardContent>
      <div className='flex items-center justify-between'>
       {project.link && (
        <Button variant='outline' asChild>
         <a href={project.link}>Live Demo</a>
        </Button>
       )}
       {project.github && (
        <Button variant='ghost'>
         <a href={project.github}>
          <Github />
         </a>
        </Button>
       )}
      </div>
     </Card>
     </ElectricBorder>
    ))}
   </div>
  </section>
 );
};

export default Projects;
