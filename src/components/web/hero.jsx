import React from 'react';
import { Button } from '../ui/button';
import programmer from '../../assets/programmer1.png';
import { ArrowDownToLine } from 'lucide-react';
import GradientIcon from './gradient-icon';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Meteors } from '../ui/meteors';
import { FolderOpen } from 'lucide-react';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { FlipWords } from '../ui/flip-words';
import { CardBody, CardContainer } from '../ui/3d-card';
import { FolderClosed } from 'lucide-react';

const flipWords = [
 'Software Engineer',
 'IT Assistant',
 'Web Developer',
 'Social Media Manager',
];

const Hero = ({ id }) => {
 return (
  <>
   <Meteors number={30} className='before:from-violet-700 before:opacity-0 ' />
   <div
    id={id}
    className=' min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 bg-primary-bg  '
   >
    <div className='order-2 lg:order-1 flex flex-col justify-center px-0 md:px-10 space-y-3'>
     <h1
      className='text-xl md:text-2xl lg:text-3xl mb-5 hidden lg:block'
      data-aos='fade-up'
     >
      Hello 👋, I am <br />
      <span className=''>
       <TextGenerateEffect
        words='Mihiranga Upasara'
        className='text-3xl lg:text-6xl'
       />
      </span>
     </h1>
     <p
      className='hidden lg:flex gap-2 text-3xl mb-15'
      data-aos='fade-up'
      data-aos-delay='200'
     >
      -
      <FlipWords
       words={flipWords}
       className='font-mono font-semibold text-2xl md: lg:text-4xl p-0'
      />
     </p>
     <p
      className='text-secondary-text text-base md:text-lg'
      data-aos='fade-up'
      data-aos-delay='400'
     >
      I build web applications that support real business operations. From HR
      systems and data platforms to production websites and internal tools.
     </p>
     <div
      className='flex flex-row gap-2 '
      data-aos='fade-up'
      data-aos-delay='600'
     >
      <Button
       variant='outline'
       className='text-violet-600 group border-violet-600 border-2 hover:text-violet-600 hover:shadow-md hover:bg-white'
      >
       Resume
       <ArrowDownToLine className='group-hover:translate-y-0.5 duration-300 text-fuchsia-600' />
      </Button>
      <Button className='bg-gradient group '>
       View Projects{' '}
       <FolderOpen className='group-hover:block hidden  transition-all  group-hover:scale-110 duration-300' />
       <FolderClosed className='group-hover:hidden transition-all duration-300' />
      </Button>
     </div>
     {/* social */}
     <div className='flex gap-2' data-aos='fade-up' data-aos-delay='800'>
      <button className='bg-transparent'>
       <GradientIcon Icon={Github} />
      </button>
      <button className='bg-transparent'>
       <GradientIcon Icon={Linkedin} />
      </button>
      <button className='bg-transparent'>
       <GradientIcon Icon={Instagram} />
      </button>
     </div>
    </div>
    <div
     className='order-1 lg:order-2 flex flex-col p-0 md:px-10 lg:p-0 '
     data-aos='fade-left'
     data-aos-delay='1200'
    >
     <h1
      className='text-xl md:text-3xl mb-5 block lg:hidden pt-10'
      data-aos='fade-up'
     >
      Hello 👋, I am <br />
      <span className=''>
       <TextGenerateEffect
        words='Mihiranga Upasara'
        className='text-xl md:text-6xl'
       />
      </span>
     </h1>
     <p
      className='flex gap-2 text-2xl md:text-3xl mb-15  lg:hidden'
      data-aos='fade-up'
      data-aos-delay='200'
     >
      -
      <FlipWords
       words={flipWords}
       className='font-mono font-semibold text-2xl md:text-4xl p-0'
      />
     </p>
     <div className='flex items-center justify-center'>
      <CardContainer>
       <CardBody>
        <img src={programmer} />
       </CardBody>
      </CardContainer>
     </div>
    </div>
   </div>
  </>
 );
};

export default Hero;
