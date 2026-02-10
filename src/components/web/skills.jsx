import React from 'react';
import LogoLoop from '../LogoLoop';
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from '../ui/tooltip';

//front-end images
import html from '../../assets/logo/html.png';
import css from '../../assets/logo/css.png';
import tailwind from '../../assets/logo/tailwind.png';
import js from '../../assets/logo/js.png';
import react from '../../assets/logo/reactjs.png';
import next from '../../assets/logo/nextjs.png';
import ts from '../../assets/logo/ts.png';
import shadcn from '../../assets/logo/shadcn.png';
import zod from '../../assets/logo/zod.png';
import aos from '../../assets/logo/aos.png';
import reactbits from '../../assets/logo/reactbits.png';
import motion from '../../assets/logo/framer-motion.png';
import aceternity from '../../assets/logo/aceternity.png';

//back-end images
import nodejs from '../../assets/logo/nodejs.png';
import firebase from '../../assets/logo/firebase.png';
import express from '../../assets/logo/express.png';
import jwt from '../../assets/logo/jwt.png';
import mongo from '../../assets/logo/mongo.png';
import prisma from '../../assets/logo/prisma.png';

//tool images
import git from '../../assets/logo/git.png';
import github from '../../assets/logo/github.png';
import pnpm from '../../assets/logo/pnpm.png';
import vercel from '../../assets/logo/vercel.png';
import postman from '../../assets/logo/postman.png';
import eslint from '../../assets/logo/eslint.png';
import canva from '../../assets/logo/canva.png';
import figma from '../../assets/logo/figma.png';

const frontendLogo = [
 { src: html, alt: 'HTML', title: 'HTML' },
 { src: css, alt: 'CSS', title: 'CSS' },
 { src: tailwind, alt: 'Tailwind CSS', title: 'Tailwind CSS' },
 { src: js, alt: 'JavaScript', title: 'JavaScript' },
 { src: react, alt: 'React JS', title: ' React JS' },
 { src: aos, alt: 'Animate On Scroll', title: 'Animate On Scroll' },
 { src: next, alt: 'Next JS', title: 'Next JS' },
 { src: ts, alt: 'Typescript', title: 'Typescript' },
 { src: shadcn, alt: 'Shadcn UI', title: 'Shadcn UI' },
 { src: zod, alt: 'ZOD', title: 'ZOD' },
 { src: reactbits, alt: 'React Bits', title: 'React Bits' },
 { src: motion, alt: 'Framer Motion', title: 'Framer Motion' },
 { src: aceternity, alt: 'Aceternity UI', title: 'Aceternity UI' },
];

const backendLogo = [
 { src: nodejs, alt: 'Node JS', title: 'Node JS' },
 { src: firebase, alt: 'Firebase', title: 'Firebase' },
 { src: express, alt: 'Express JS', title: 'Express JS' },
 { src: jwt, alt: 'JWT Authentication', title: 'JWT Authentication' },
 { src: mongo, alt: 'Mongo DB', title: 'Mongo DB' },
 { src: prisma, alt: 'Prisma', title: 'Prisma' },
];

const toolLogo = [
 { src: git, alt: 'Git', title: 'Git' },
 { src: github, alt: 'Github', title: 'Github' },
 { src: pnpm, alt: 'pnpm', title: 'pnpm' },
 { src: vercel, alt: 'Vercel', title: 'Vercel' },
 { src: postman, alt: 'Postman', title: 'Postman' },
 { src: eslint, alt: 'ESLint', title: 'ESLint' },
 { src: canva, alt: 'Canva', title: 'Canva' },
 { src: figma, alt: 'Figma', title: 'Figma' },
];

const Skills = ({ id }) => {
 return (
  <section id={id} className='p-5 bg-white'>
   <h1
    className='text-center text-indigoo-600 text-shadow-sm font-poppins font-semibold text-4xl lg:text-5xl mb-5 pt-10 pb-10 '
    data-aos='fade-up'
   >
    Skills
   </h1>
   {/* front-end */}
   <div className='mb-10' data-aos='fade-up' data-aos-delay='200'>
    <h2 className='text-xl font-poppins font-medium mb-3 text-indigoo-800 '>
     Frontend Skills
    </h2>
    <LogoLoop
     logos={frontendLogo}
     speed={60}
     direction='left'
     logoHeight={60}
     gap={60}
     hoverSpeed={0}
     scaleOnHover
     fadeOut
     fadeOutColor='#ffffff'
     ariaLabel='Technology partners'
     renderItem={(item) => (
      <TooltipProvider delayDuration={200}>
       <Tooltip>
        <TooltipTrigger asChild>
         <img
          src={item.src}
          alt={item.alt}
          className='h-14 w-auto cursor-pointer'
         />
        </TooltipTrigger>

        <TooltipContent>
         <p>{item.title}</p>
        </TooltipContent>
       </Tooltip>
      </TooltipProvider>
     )}
    />
   </div>
   {/* back-end */}
   <div className='mb-10' data-aos='fade-up' data-a os-delay='400'>
    <h2 className='text-xl font-poppins font-medium mb-3 text-indigoo-800 '>
     Backend Skills
    </h2>
    <LogoLoop
     logos={backendLogo}
     speed={60}
     direction='right'
     logoHeight={60}
     gap={60}
     hoverSpeed={0}
     scaleOnHover
     fadeOut
     fadeOutColor='#ffffff'
     ariaLabel='Technology partners'
     renderItem={(item) => (
      <TooltipProvider delayDuration={200}>
       <Tooltip>
        <TooltipTrigger asChild>
         <img
          src={item.src}
          alt={item.alt}
          className='h-14 w-auto cursor-pointer'
         />
        </TooltipTrigger>

        <TooltipContent>
         <p>{item.title}</p>
        </TooltipContent>
       </Tooltip>
      </TooltipProvider>
     )}
    />
   </div>
   {/* tools */}
   <div className='mb-10' data-aos='fade-up' data-aos-delay='600'>
    <h2 className='text-xl font-poppins font-medium mb-3 text-indigoo-800'>
     Tools
    </h2>
    <LogoLoop
     logos={toolLogo}
     speed={60}
     direction='left'
     logoHeight={60}
     gap={60}
     hoverSpeed={0}
     scaleOnHover
     fadeOut
     fadeOutColor='#ffffff'
     ariaLabel='Technology partners'
     renderItem={(item) => (
      <TooltipProvider delayDuration={200}>
       <Tooltip>
        <TooltipTrigger asChild>
         <img
          src={item.src}
          alt={item.alt}
          className='h-14 w-auto cursor-pointer'
         />
        </TooltipTrigger>

        <TooltipContent>
         <p>{item.title}</p>
        </TooltipContent>
       </Tooltip>
      </TooltipProvider>
     )}
    />
   </div>
  </section>
 );
};

export default Skills;
