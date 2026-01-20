import React from 'react';
import { Button } from '../ui/button';
import RotatingText from '../RotatingText';
import programmer from '../../assets/programmer.png';

const Hero = ({ id }) => {
 return (
  <section
   id={id}
   className='min-h-screen grid grid-cols-1 md:grid-cols-2 p-5 pt-20'
  >
   <div>
    <h1 className='text-xl'>
     Hello! I am{' '}
     <span className='text-5xl font-poppins font-semibold'>
      Mihiranga Upasara
     </span>
    </h1>
    <p className='flex'>
     a{' '}
     <RotatingText
      texts={[
       'Software Engineer',
       'IT Assistant',
       'Web Developer',
       'Social Media Manager',
      ]}
      mainClassName='px-2 sm:px-2 md:px-3 bg-violet-50 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg'
      staggerFrom={'last'}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-120%' }}
      staggerDuration={0.025}
      splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
      transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      rotationInterval={2000}
     />
    </p>
    <p className=''>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, ametnam,
     dignissimos corrupti ipsam nostrum quas assumenda incidunt id repellendus
     atque adipisci d nihil quam minus illum iusto maxime asperiores?
    </p>
    <div className='flex flex-row gap-2'>
     <Button variant='outline'>Resume</Button>
     <Button>View Projects</Button>
    </div>
   </div>
   <div>
    <img src={programmer} />
   </div>
  </section>
 );
};

export default Hero;
