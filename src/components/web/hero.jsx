import React from 'react';
import { Button } from '../ui/button';
import programmer from '../../assets/programmer1.png';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { CardBody, CardContainer } from '../ui/3d-card';
import { LinkPreview } from '../ui/link-preview';
import { DownloadIcon } from '../ui/download';
import { useRef } from 'react';
import { FoldersIcon } from '../ui/folders';
import { GithubIcon } from '../ui/github';
import { LinkedinIcon } from '../ui/linkedin';
import { InstagramIcon } from '../ui/instagram';
import { ContainerTextFlip } from '../ui/container-text-flip';

const Hero = ({ id }) => {
 const iconRef = useRef(null);
 const iconRef2 = useRef(null);
 return (
  <>
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
        className='text-4xl lg:text-6xl text-shadow-sm'
       />
      </span>
     </h1>
     <div
      className='lg:flex items-center  text-3xl'
      data-aos='fade-right'
      data-aos-delay='600'
     >
      -
      <ContainerTextFlip
       words={[
        'IT Assistant',
        'Software Engineer',
        'Junior Executive',
        'Web Developer',
       ]}
       textClassName='bg-transparent'
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
       className='bg-transparent border-2 border-indigoo-600 text-indigoo-600 hover:border-indigoo-700 hover:text-indigoo-700 hover:bg-indigoo-50 hover:shadow-md hover:scale-105 duration-300'
       size='sm'
       onMouseEnter={() => iconRef.current.startAnimation()}
       onMouseLeave={() => iconRef.current.stopAnimation()}
      >
       Resume
       <DownloadIcon ref={iconRef} />
      </Button>
      <Button
       className='group bg-indigoo-600 text-white  hover:bg-indigoo-700 hover:scale-105 duration-300 hover:shadow-md shadow- '
       size='sm'
       onMouseEnter={() => iconRef2.current.startAnimation()}
       onMouseLeave={() => iconRef2.current.stopAnimation()}
      >
       View Projects <FoldersIcon ref={iconRef2} />
      </Button>
     </div>
     {/* social */}
     <div className='flex gap-4' data-aos='fade-right' data-aos-delay='1200'>
      <LinkPreview url='https://github.com/Upasara'>
       <button className='bg-transparent cursor-pointer'>
        <GithubIcon className='text-indigoo-600' />
       </button>
      </LinkPreview>
      <LinkPreview url='https://www.linkedin.com/in/mihiranga-upasara/'>
       <button className='bg-transparent cursor-pointer'>
        <LinkedinIcon className='text-indigoo-600' />
       </button>
      </LinkPreview>
      <LinkPreview url='https://www.instagram.com/mihiranga.upasara/'>
       <button className='bg-transparent cursor-pointer'>
        <InstagramIcon className='text-indigoo-600' />
       </button>
      </LinkPreview>
     </div>
    </div>
   </div>
  </>
 );
};

export default Hero;
