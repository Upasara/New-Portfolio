import React from 'react';
import Stack from '../Stack';
import ME from '../../assets/me1.jpg';
import ME2 from '../../assets/me2.jpg';
import GYM from '../../assets/gym.jpg';
import { Button } from '../ui/moving-border';
import { BriefcaseBusiness } from 'lucide-react';
import { FolderOpen } from 'lucide-react';
import { Award } from 'lucide-react';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { useRef } from 'react';

const images = [
 {
  image: ME,
  text: 'My Self',
 },
 {
  image: ME2,
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
   'I am a Software Engineering graduate with hands-on experience in software development, system support, IT operations, and business application development. I hold a BSc (Hons) in Software Engineering from Plymouth University (UK) with a Second Upper Class degree 🎓. I enjoy building practical, secure, and scalable systems that solve real business problems and improve operational efficiency 🚀.',
  content: (
   <div className='flex justify-center '>
    <img
     src={ME2}
     alt='My Self'
     className='w-full max-w-md h-auto rounded-lg object-cover'
    />
   </div>
  ),
 },
 {
  title: '',
  description:
   'I began my professional journey at Nature’s Beauty Creations (NBC) as a Sales System Support & Testing Intern, where I worked on software testing, bug identification, system validation, and user support for internal sales systems. During this period, I was promoted to Junior Executive – Sales System Support, gaining experience in system monitoring, issue resolution, and cross-team collaboration 📊🔍.',
  content: (
   <div>
    <img src={ME2} alt='My Self' className='w-full h-auto rounded-lg' />
   </div>
  ),
 },
 {
  title: '',
  description:
   'Currently, I work as an IT Assistant at PE Mathew Company, contributing beyond traditional IT support by developing and maintaining internal business systems. My work includes designing and deploying secure centralized database systems, developing web-based employee management and HR automation systems with role-based access, and handling network troubleshooting, IT asset management, website maintenance, and digital platforms 🌐🛠️.',
  content: (
   <div>
    <img src={GYM} alt='My Self' className='w-full h-auto rounded-lg' />
   </div>
  ),
 },
 {
  title: '',
  description:
   'In addition to my industry experience, I hold Google Cloud certifications, including Google Cloud Fundamentals – Core Infrastructure and Generative AI certifications covering large language models (LLMs) and responsible AI practices ☁️🤖. Outside of work, I am passionate about motorsports (Formula 1 & NASCAR) 🏎️, enjoy watching movies—especially comic-based films 🎬, and value continuous learning, teamwork, and problem-solving 💡.',
  content: (
   <div>
    <img src={GYM} alt='My Self' className='w-full h-auto rounded-lg' />
   </div>
  ),
 },
];

const Bio = ({ id, navigate }) => {
 const iconRef = useRef(null);
 return (
  <section id={id} className='min-h-screen  p-5 md:p-10 pt-10 pb-15'>
   <h1
    className='text-center text-gradient font-poppins font-semibold text-4xl lg:text-5xl mb-5'
    data-aos='fade-up'
   >
    Get To Know Me
   </h1>

   <div className='bg-white rounded-md'>
    <div
     className='lg:hidden flex items-center justify-center w-full md:w-130 h-64 md:h-80 mx-auto mb-10 px-10 mt-10'
     data-aos='fade-up'
     data-aos-delay={200}
    >
     <Stack
      randomRotation={true}
      sensitivity={150}
      sendToBackOnClick={true}
      cards={images.map((src, i) => (
       <div key={i} className='bg-white'>
        <img
         src={src.image}
         alt={src.text}
         className=' w-full md:w-130 h-64 md:h-80  object-cover object-center '
        />
       </div>
      ))}
     />
    </div>
    <div
     className=' w-full lg:w-10/12 mx-auto  py-4 cursor-grab '
     data-aos='fade-up'
     data-aos-delay={400}
    >
     <StickyScroll content={data} contentClassName={'bg-trasparent'} />
    </div>
   </div>

   <div className=' flex flex-col md:flex-row items-center justify-center md:gap-5 gap-6 gap-y-3 mt-2 lg:mt-5'>
    <Button
     borderRadius='1rem'
     containerClassName={
      'h-16 w-11/12 md:h-16 md:w-48 lg:h-20 lg:w-72 shadow-md hover:shadow-lg duration-300 group cursor-pointer'
     }
     borderClassName={'opacity-[1]'}
     className='bg-white text-primary-text flex flex-row items-center border-0  '
     data-aos='fade-up-right'
     onClick={() => navigate('experience')}
    >
     <div className='text-3xl lg:text-4xl text-gradient mb-0 pb-0 font-semibold font-poppins group-hover:text-[45px] duration-300 '>
      2+
     </div>
     <div className='flex flex-col items-center justify-center ml-7 md:ml-3 lg:ml-7'>
      <BriefcaseBusiness
       size={18}
       className='text-secondary-text group-hover:text-primary-text duration-300 '
      />
      <p className='text-sm lg:text-base font-mono text-secondary-text group-hover:text-primary-text duration-300'>
       Experience
      </p>
     </div>
    </Button>
    <Button
     borderRadius='1rem'
     containerClassName={
      'h-16 w-11/12 md:h-16 md:w-48 lg:h-20 lg:w-72  shadow-md hover:shadow-lg duration-300 group cursor-pointer'
     }
     borderClassName={'opacity-[1]'}
     className='bg-white text-primary-text flex flex-row items-center border-0  '
     data-aos='fade-up'
     onClick={() => navigate('projects')}
    >
     <div className='text-3xl lg:text-4xl text-gradient mb-0 pb-0 font-semibold font-poppins group-hover:text-[45px] duration-300'>
      7+
     </div>
     <div className='flex flex-col items-center justify-center ml-7 md:ml-3 lg:ml-7'>
      <FolderOpen
       size={18}
       className='text-secondary-text group-hover:text-primary-text duration-300 '
      />
      <p className='text-sm lg:text-base font-mono text-secondary-text group-hover:text-primary-text duration-300'>
       Projects
      </p>
     </div>
    </Button>
    <Button
     borderRadius='1rem'
     containerClassName={
      'h-16 w-11/12 md:h-16 md:w-48 lg:h-20 lg:w-72 shadow-md hover:shadow-lg duration-300 group cursor-pointer'
     }
     borderClassName={'opacity-[1]'}
     className='bg-white text-primary-text flex flex-row items-center border-0  '
     data-aos='fade-up-left'
     onClick={() => navigate('experience')}
    >
     <div className='text-3xl lg:text-4xl text-gradient mb-0 pb-0 font-semibold font-poppins group-hover:text-[45px] duration-300'>
      4+
     </div>
     <div className='flex flex-col items-center justify-center ml-7 md:ml-3 lg:ml-7'>
      <Award
       size={18}
       className='text-secondary-text group-hover:text-primary-text duration-300 '
      />
      <p className='text-sm lg:text-base font-mono text-secondary-text group-hover:text-primary-text duration-300'>
       Certificates
      </p>
     </div>
    </Button>
   </div>
  </section>
 );
};

export default Bio;
