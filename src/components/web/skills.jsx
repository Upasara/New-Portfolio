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
  <div id={id} className='p-5 bg-green-50'>
   <h1>Skills</h1>
   {/* front-end */}
   <div>
    <h2>Frontend Skills</h2>
    <LogoLoop
     logos={frontendLogo}
     speed={70}
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
   <div>
    <h2>Backend Skills</h2>
    <LogoLoop
     logos={backendLogo}
     speed={70}
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
   <div>
    <h2>Tools</h2>
    <LogoLoop
     logos={toolLogo}
     speed={100}
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
  </div>
 );
};

export default Skills;
