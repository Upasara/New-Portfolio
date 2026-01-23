import React from 'react';
import Stack from '../Stack';
import ME from '../../assets/me.jpg';
import F1 from '../../assets/f1.jpg';
import GYM from '../../assets/gym.jpg';
import { Button } from '../ui/moving-border';
import GradientIcon from './gradient-icon';
import { BriefcaseBusiness } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import { Award } from 'lucide-react';
import { StickyScroll } from '../ui/sticky-scroll-reveal';

const images = [
 {
  image: ME,
  text: 'My Self',
 },
 {
  image: F1,
  text: 'I like cars',
 },
 {
  image: GYM,
  text: 'I am fit',
 },
];

const data = [
 {
  title: '',
  description:
   'I am a web developer with practical experience building and maintaining web-based systems for real business use. At P E Mathew & Company, I developed internal systems such as an HR management platform, a centralized data storage solution, and I continue to maintain the company’s website and blog used in daily operations.',
  content: (
   <div>
    <img src={ME} alt='My Self' className='w-full h-auto rounded-lg' />
   </div>
  ),
 },
 {
  title: '',
  description:
   'Previously, I worked as a System Testing and Support Intern at Nature’s Beauty Creations, where I tested systems, identified bugs, and supported live environments. This role helped me understand how real systems operate and the importance of stability and usability.',
  content: (
   <div>
    <img src={F1} alt='My Self' className='w-full h-auto rounded-lg' />
   </div>
  ),
 },
 {
  title: '',
  description:
   'I focus on building clean, scalable web applications with well-structured code and user-friendly interfaces. Currently, I am continuing to improve my web development skills by working on real-world projects and strengthening my full-stack knowledge',
  content: (
   <div>
    <img src={GYM} alt='My Self' className='w-full h-auto rounded-lg' />
   </div>
  ),
 },
];

const Bio = ({ id }) => {
 return (
  <section id={id} className='min-h-screen  p-5 md:p-10'>
   <h1 className='text-center text-gradient font-poppins font-semibold text-5xl mb-5'>
    Get To Know Me
   </h1>

   <div className=''>
    <div className='flex items-center justify-center w-full h-64 mx-auto mb-10'>
     <Stack
      randomRotation={true}
      sensitivity={150}
      sendToBackOnClick={true}
      cards={images.map((src, i) => (
       <div key={i} className='bg-white'>
        <img
         src={src.image}
         alt={src.text}
         className=' w-full h-64  object-cover object-center '
        />
       </div>
      ))}
     />
    </div>
    <div className=' w-full lg:w-9/12 mx-auto  py-4 cursor-all-scroll'>
     <StickyScroll content={data} contentClassName={'bg-trasparent'} />
    </div>
   </div>

   {/* <div className='grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-3 lg:gap-5 px-0'>
      <Button
       borderRadius='1rem'
       containerClassName={
        'h-16 w-44 md:h-20 md:w-56 shadow-md hover:shadow-lg duration-300 group cursor-pointer'
       }
       borderClassName={'opacity-[1]'}
       className='bg-white text-primary-text flex flex-row items-center border-0  '
      >
       <div className='text-3xl md:text-4xl text-gradient mb-0 pb-0 font-semibold font-poppins group-hover:text-[45px] duration-300'>
        2+
       </div>
       <div className='flex flex-col items-center justify-center ml-3'>
        <BriefcaseBusiness
         size={18}
         className='text-secondary-text group-hover:text-primary-text duration-300 '
        />
        <p className='text-sm md:text-base font-mono text-secondary-text group-hover:text-primary-text duration-300'>
         Experience
        </p>
       </div>
      </Button>
      <Button
       borderRadius='1rem'
       containerClassName={
        'h-16 w-44 md:h-20 md:w-56  shadow-md hover:shadow-lg duration-300 group cursor-pointer'
       }
       borderClassName={'opacity-[1]'}
       className='bg-white text-primary-text flex flex-row items-center border-0  '
      >
       <div className='text-3xl md:text-4xl text-gradient mb-0 pb-0 font-semibold font-poppins group-hover:text-[45px] duration-300'>
        7+
       </div>
       <div className='flex flex-col items-center justify-center ml-3'>
        <FolderOpen
         size={18}
         className='text-secondary-text group-hover:text-primary-text duration-300 '
        />
        <p className='text-sm md:text-base font-mono text-secondary-text group-hover:text-primary-text duration-300'>
         Projects
        </p>
       </div>
      </Button>
      <Button
       borderRadius='1rem'
       containerClassName={
        'h-16 w-44 md:h-20 md:w-56  shadow-md hover:shadow-lg duration-300 group cursor-pointer'
       }
       borderClassName={'opacity-[1]'}
       className='bg-white text-primary-text flex flex-row items-center border-0  '
      >
       <div className='text-3xl md:text-4xl text-gradient mb-0 pb-0 font-semibold font-poppins group-hover:text-[45px] duration-300'>
        4+
       </div>
       <div className='flex flex-col items-center justify-center ml-3'>
        <Award
         size={18}
         className='text-secondary-text group-hover:text-primary-text duration-300 '
        />
        <p className='text-sm md:text-base font-mono text-secondary-text group-hover:text-primary-text duration-300'>
         Certificates
        </p>
       </div>
      </Button>
     </div> */}
  </section>
 );
};

export default Bio;
