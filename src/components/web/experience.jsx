import React from 'react';
import { Timeline } from '../ui/timeline';

//images
import pemco from '../../assets/comapany_logo/pemco.png';
import nbc from '../../assets/comapany_logo/nbc.png';
import ply from '../../assets/comapany_logo/ply.png';
import ritti from '../../assets/comapany_logo/ritti.png';
import google from '../../assets/comapany_logo/google-cloud.png';
import { Badge } from '../ui/badge';

const Experience = ({ id }) => {
 const data = [
  {
   title: 'IT Assistant',
   content: (
    <div className='group flex flex-col gap-4  bg-white dark:bg-white p-4 md:p-5  py-5 rounded-lg shadow-md font-inter text-primary-text border-2 border-indigoo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigoo-100 duration-300'>
     {/* header */}
     <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
      {/* logo */}
      <div>
       <img src={pemco} alt='PEMCO' className='h-10 w-auto' />
      </div>
      {/* name */}
      <div>
       <h3 className='font-poppins font-medium text-lg text-indigoo-800'>
        P E Mathew & Company
       </h3>
       <Badge className=' bg-indigoo-50 text-indigoo-400'>
        Oct 2024 - Present
       </Badge>
      </div>
     </div>
     {/* description */}
     <div className='mt-2'>
      <p className='font-medium '>
       Contributed to improving operational efficiency through reliable IT
       support, custom software solutions, and centralized data management.
      </p>
      <ul className='list-disc text-sm mt-2 text-secondary-text ml-4'>
       <li>
        Managed IT assets, network infrastructure, and system maintenance
       </li>
       <li>
        Provided first-line technical support for hardware, software, and
        networking{' '}
       </li>
       <li>Developed and maintained the HR Management System (EMSys)</li>
       <li>Implemented a centralized data management system </li>
       <li> Managed company website, social media, and digital content</li>
      </ul>
     </div>
    </div>
   ),
  },
  {
   title: 'Junior Executive ',
   content: (
    <div className='group flex flex-col gap-4  bg-white dark:bg-white p-4 md:p-5  py-5 rounded-lg shadow-md font-inter text-primary-text border-2 border-indigoo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigoo-100 duration-300'>
     {/* header */}
     <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
      {/* logo */}
      <div>
       <img src={nbc} alt='NBC' className='h-10 w-auto' />
      </div>
      {/* name */}
      <div>
       <h3 className='font-poppins font-medium text-lg text-indigoo-800'>
        Nature's Beauty Creation
       </h3>
       <Badge className=' bg-indigoo-50 text-indigoo-400'>
        Aug 2023 - Aug 2024
       </Badge>
      </div>
     </div>
     {/* description */}
     <div className='mt-2'>
      <p className='font-medium '>
       Promoted role with increased responsibility in testing, coordinating, and
       supporting enterprise sales platforms.
      </p>
      <ul className='list-disc text-sm mt-2 text-secondary-text ml-4'>
       <li>Led User Acceptance Testing (UAT) for sales systems</li>
       <li>Analyzed, tracked, and reported system defects</li>
       <li>Coordinated issue resolution with development team</li>
       <li>Ensured sales data accuracy and reporting reliability</li>
       <li> Supported system upgrades and operational improvements</li>
      </ul>
     </div>
    </div>
   ),
  },
  {
   title: 'Sales Systems Intern ',
   content: (
    <div className='group flex flex-col gap-4  bg-white dark:bg-white p-4 md:p-5  py-5 rounded-lg shadow-md font-inter text-primary-text border-2 border-indigoo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigoo-100 duration-300'>
     {/* header */}
     <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
      {/* logo */}
      <div>
       <img src={nbc} alt='NBC' className='h-10 w-auto' />
      </div>
      {/* name */}
      <div>
       <h3 className='font-poppins font-medium text-lg text-indigoo-800'>
        Nature's Beauty Creation
       </h3>
       <Badge className=' bg-indigoo-50 text-indigoo-400'>
        Aug 2023 - Aug 2024
       </Badge>
      </div>
     </div>
     {/* description */}
     <div className='mt-2'>
      <p className='font-medium '>
       Entry-level role focused on learning and supporting enterprise sales
       systems through hands-on testing and validation.
      </p>

      <ul className='list-disc text-sm mt-2 text-secondary-text ml-4'>
       <li>Assisted in User Acceptance Testing (UAT) activities</li>
       <li>Logged and documented system bugs and test results</li>
       <li>Verified sales data and basic system outputs</li>
       <li>Supported sales teams with system-related queries </li>
       <li> Gained exposure to enterprise sales workflows</li>
      </ul>
     </div>
    </div>
   ),
  },
  {
   title: 'BSc (HONS) Software Engineering',
   content: (
    <div className='group flex flex-col gap-4  bg-white dark:bg-white p-4 md:p-5  py-5 rounded-lg shadow-md font-inter text-primary-text border-2 border-indigoo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigoo-100 duration-300'>
     {/* header */}
     <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
      {/* logo */}
      <div>
       <img src={ply} alt='Plymouth University' className='h-10 w-auto' />
      </div>
      {/* name */}
      <div>
       <h3 className='font-poppins font-medium text-lg text-indigoo-800'>
        PLymouth University
       </h3>
       <Badge className=' bg-indigoo-50 text-indigoo-400'>
        May 2020 - Sep 2023
       </Badge>
      </div>
     </div>
     {/* description */}
     <div className='mt-2'>
      <p>
       BSc (Hons) in Software Engineering,{' '}
       <b className='font-semibold'>Second Class Upper</b> , with practical
       experience in{' '}
       <b className='font-semibold'>
        full-stack development, algorithms, databases, mobile apps, IoT, AI/ML,
        and software project management.
       </b>{' '}
       Active volunteer with the university FOSS Club, contributing to
       open-source projects.
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'SLCCLC',
   content: (
    <div className='group flex flex-col gap-4  bg-white dark:bg-white p-4 md:p-5  py-5 rounded-lg shadow-md font-inter text-primary-text border-2 border-indigoo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigoo-100 duration-300'>
     {/* header */}
     <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
      {/* logo */}
      <div>
       <img
        src={ritti}
        alt='Ranaviru Information Technology Training Institute'
        className='h-10 w-auto'
       />
      </div>
      {/* name */}
      <div>
       <h3 className='font-poppins font-medium text-lg text-indigoo-800'>
        Ranaviru Information Technology Training Institute
       </h3>
       <Badge className=' bg-indigoo-50 text-indigoo-400'>
        Jan 2017 - May 2017
       </Badge>
      </div>
     </div>
     {/* description */}
     <div className='mt-2'>
      <p>
       Completed foundational computer training covering{' '}
       <b className='font-semibold'>
        {' '}
        MS Office applications, internet and email usage, and basic computer
        hardware concepts,
       </b>{' '}
       building essential digital and IT skills that supported further studies
       and professional work in software and IT systems.
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'Core Infrastructure',
   content: (
    <div className='group flex flex-col gap-4  bg-white dark:bg-white p-4 md:p-5  py-5 rounded-lg shadow-md font-inter text-primary-text border-2 border-indigoo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigoo-100 duration-300'>
     {/* header */}
     <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
      {/* logo */}
      <div>
       <img
        src={google}
        alt='Google Cloud Fundamentals'
        className='h-10 w-auto'
       />
      </div>
      {/* name */}
      <div>
       <h3 className='font-poppins font-medium text-lg text-indigoo-800'>
        Google Cloud Fundamentals
       </h3>
       <Badge className=' bg-indigoo-50 text-indigoo-400'>May 2024</Badge>
      </div>
     </div>
     {/* description */}
     <div className='mt-2'>
      <p>
       Completed training focused on understanding the core services and
       infrastructure of Google Cloud Platform (GCP). Gained hands-on knowledge
       of{' '}
       <b className='font-semibold'>
        cloud resource organization, identity and access concepts, basic
        infrastructure setup, and cloud storage options,
       </b>{' '}
       building a strong foundation in cloud-based application and system
       deployment.
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'Intro to Generative AI',
   content: (
    <div className='group flex flex-col gap-4  bg-white dark:bg-white p-4 md:p-5  py-5 rounded-lg shadow-md font-inter text-primary-text border-2 border-indigoo-200 hover:scale-105 hover:shadow-lg hover:shadow-indigoo-100 duration-300'>
     {/* header */}
     <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
      {/* logo */}
      <div>
       <img
        src={google}
        alt='Google Cloud Fundamentals'
        className='h-10 w-auto'
       />
      </div>
      {/* name */}
      <div>
       <h3 className='font-poppins font-medium text-lg text-indigoo-800'>
        Google Cloud Fundamentals
       </h3>
       <Badge className=' bg-indigoo-50 text-indigoo-400'>May 2024</Badge>
      </div>
     </div>
     {/* description */}
     <div className='mt-2'>
      <p>
       Completed a specialization covering core Generative AI concepts,
       including{' '}
       <b className='font-semibold'>
        Large Language Models (LLMs) and Responsible AI practices
       </b>
       . Gained a practical understanding of how{' '}
       <b className='font-semibold'>
        generative models work, key AI use cases, and how to apply ethical and
        responsible AI principles{' '}
       </b>
       using Google Cloud technologies.
      </p>
     </div>
    </div>
   ),
  },
 ];
 return (
  <section id={id} className='relative mx-auto max-w-6xl py-20 overflow-clip'>
   <h1
    className='text-center text-indigoo-600 text-shadow-sm font-poppins font-semibold text-4xl lg:text-5xl mb-5 pt-10 pb-10 '
    data-aos='fade-up'
   >
    Experience & Education
   </h1>
   <Timeline data={data} />
  </section>
 );
};

export default Experience;
