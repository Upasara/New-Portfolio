'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Mouse } from 'lucide-react';
import { MoveDown } from 'lucide-react';

export const StickyScroll = ({ content, contentClassName }) => {
 const [activeCard, setActiveCard] = React.useState(0);
 const ref = useRef(null);
 const { scrollYProgress } = useScroll({
  // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
  target: ref,
  container: ref,
  offset: ['start start', 'end start'],
 });
 const cardLength = content.length;

 useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  const cardsBreakpoints = content.map((_, index) => index / cardLength);
  const closestBreakpointIndex = cardsBreakpoints.reduce(
   (acc, breakpoint, index) => {
    const distance = Math.abs(latest - breakpoint);
    if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
     return index;
    }
    return acc;
   },
   0
  );
  setActiveCard(closestBreakpointIndex);
 });

 const backgroundColors = [];
 const linearGradients = [
  '', // orange-500 to yellow-500
 ];

 const [backgroundGradient, setBackgroundGradient] = useState(
  linearGradients[0]
 );

 useEffect(() => {
  setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
 }, [activeCard]);

 return (
  <motion.div
   animate={{
    backgroundColor: backgroundColors[activeCard % backgroundColors.length],
   }}
   data-lenis-prevent
   className='relative flex h-[30rem] justify-center space-x-0 lg:space-x-10 overflow-y-auto  rounded-lg p-1 md:p-10 '
   ref={ref}
  >
   {/* scroll image */}
   <div className=' md:flex flex-col justify-center text-gray-400 space-y-5  hidden md:mr-7 lg:mr-0'>
    <Mouse className='animate-pulse' />
    <MoveDown className='animate-pulse' />
   </div>
   <div className='div relative flex items-start px-1 lg:px-4 '>
    <div className='max-w-2xl  '>
     {content.map((item, index) => (
      <div key={item.title + index} className='my-5 md:my-20'>
       <motion.h2
        initial={{
         opacity: 0,
        }}
        animate={{
         opacity: activeCard === index ? 1 : 0.3,
        }}
        className='text-2xl font-bold text-primary-text'
       >
        {item.title}
       </motion.h2>
       <motion.p
        initial={{
         opacity: 0,
        }}
        animate={{
         opacity: activeCard === index ? 1 : 0.3,
        }}
        className='text-lg md:text-xl leading-relaxed  mt-10 max-w-md  text-primary-text text-justify'
       >
        {item.description}
       </motion.p>
      </div>
     ))}
     <div className='h-40' />
    </div>
   </div>
   <div
    style={{ background: backgroundGradient }}
    className={cn(
     'sticky top-5 hidden  h-90 w-96 overflow-hidden rounded-md bg-white lg:block',
     contentClassName
    )}
   >
    {content[activeCard].content ?? null}
   </div>
  </motion.div>
 );
};
