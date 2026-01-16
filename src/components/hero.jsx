import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
 return (
  <div className='min-h-screen flex flex-col items-center'>
   <h1>Hello, I am Mihiranga Upasara</h1>
   <p>Software Engineer</p>
   <p>Web Developer</p>
   <p>Frontend Developer</p>
   <p>Designer</p>
   <p className='text-center'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, amet nam,
    dignissimos corrupti ipsam nostrum quas assumenda incidunt id repellendus
    atque adipisci dolores nihil quam minus illum iusto maxime asperiores?
   </p>
   <div className='flex flex-row gap-2'>
    <Button variant='outline'>Resume</Button>
    <Button>View Projects</Button>
   </div>
  </div>
 );
};

export default Hero;
