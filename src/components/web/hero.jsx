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
import { LinkPreview } from '../ui/link-preview';

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
    className=' lg:min-h-screen grid grid-cols-1 lg:grid-cols-2 p-5 '
   >
    <div
     className=' flex flex-col px-10 md:px-10 lg:p-0 items-center justify-center mt-10 md:mt-10 lg:mt-0'
     data-aos='fade-left'
     data-aos-delay='200'
    >
     <div className='flex items-center justify-center'>
      <CardContainer>
       <CardBody>
        <img src={programmer} />
       </CardBody>
      </CardContainer>
     </div>
    </div>
    <div className='flex flex-col justify-center px-0 md:px-10 space-y-5 lg:space-y-7 mt-10 mb-10 lg:mt-0 lg:mb-0'>
     <h1
      className='text-xl md:text-2xl lg:text-3xl'
      data-aos='fade-right'
      data-aos-delay='400'
     >
      Hello 👋, I am <br />
      <span className=''>
       <TextGenerateEffect
        words='Mihiranga Upasara'
        className='text-4xl lg:text-6xl'
       />
      </span>
     </h1>
     <div
      className='lg:flex  text-3xl'
      data-aos='fade-right'
      data-aos-delay='600'
     >
      -
      <FlipWords
       words={flipWords}
       className='font-mono font-semibold text-2xl md:text-3xl lg:text-4xl p-0'
      />
     </div>

     <p
      className='text-secondary-text text-sm md:text-base lg:text-lg'
      data-aos='fade-right'
      data-aos-delay='800'
     >
      I build web applications that support real business operations. From HR
      systems and data platforms to production websites and internal tools.
     </p>
     <div
      className='flex flex-row gap-2 '
      data-aos='fade-right'
      data-aos-delay='1000'
     >
      <Button
       variant='outline'
       className='text-violet-600 group border-violet-600 border-2 hover:text-violet-600 hover:shadow-md hover:bg-white'
       size='sm'
      >
       Resume
       <ArrowDownToLine className='group-hover:translate-y-0.5 duration-300 text-fuchsia-600' />
      </Button>
      <Button className='bg-gradient group' size='sm'>
       View Projects{' '}
       <FolderOpen className='group-hover:block hidden  transition-all  group-hover:scale-110 duration-300' />
       <FolderClosed className='group-hover:hidden transition-all duration-300' />
      </Button>
     </div>
     {/* social */}
     <div className='flex gap-4' data-aos='fade-right' data-aos-delay='1200'>
      <LinkPreview url='https://github.com/Upasara'>
       <button className='bg-transparent cursor-pointer'>
        <GradientIcon Icon={Github} />
       </button>
      </LinkPreview>
      <LinkPreview url='https://www.linkedin.com/in/mihiranga-upasara/'>
       <button className='bg-transparent cursor-pointer'>
        <GradientIcon Icon={Linkedin} />
       </button>
      </LinkPreview>
      <LinkPreview url='https://www.instagram.com/mihiranga.upasara/'>
       <button className='bg-transparent cursor-pointer'>
        <GradientIcon Icon={Instagram} />
       </button>
      </LinkPreview>
     </div>
    </div>
   </div>
  </>
 );
};

export default Hero;
