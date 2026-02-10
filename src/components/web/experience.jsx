import React from 'react';
import { Timeline } from '../ui/timeline';

//images
import pemco from '../../assets/comapany_logo/pemco.png';
import nbc from '../../assets/comapany_logo/nbc.png';
import ply from '../../assets/comapany_logo/ply.png';
import ritti from '../../assets/comapany_logo/ritti.png';
import google from '../../assets/comapany_logo/google-cloud.png';

const experiences = [
 {
  role: 'IT Assistant',
  company: 'P E Mathew & Company',
  period: 'Oct 2024 – Present',
  description:
   'Tested and validated a new internal sales system, identified bugs, and collaborated with the sales team to improve system reliability.',
 },
 {
  role: 'QA Intern',
  company: 'Natures Beauty Creation',
  period: 'Aug 2023 – Aug 2024',
  description:
   'Designed and developed modern web applications and portfolio websites using React, Tailwind CSS, and animation libraries.',
 },
 {
  role: 'BSc (HONS) Software Engineering',
  company: 'University of Plymouth',
  period: ' 2020 –  2023',
  description:
   'Designed and developed modern web applications and portfolio websites using React, Tailwind CSS, and animation libraries.',
 },
 {
  role:
   'Computer Competency License Course Examination (NAITA) – NVQ level III',
  company: 'Ranaviru Information Technology Training Institute',
  period: ' Jan 2017 –  May 2017',
  description:
   'Designed and developed modern web applications and portfolio websites using React, Tailwind CSS, and animation libraries.',
 },
];

const Experience = ({ id }) => {
 const data = [
  {
   title: 'IT Assistant',
   content: (
    <div className='flex flex-col gap-4'>
     {/* header */}
     <div className='flex flex-row gap-3'>
      {/* logo */}
      <div>
       <img src={pemco} alt='PEMCO' className='h-10 w-auto' />
      </div>
      {/* name */}
      <div>
       <h3>P E Mathew & Company</h3>
       <p>October 2024 - Present</p>
      </div>
     </div>
     {/* description */}
     <div>
      <p>
       Contributed to improving operational efficiency through reliable IT
       support, custom software solutions, and centralized data management.
      </p>
      <p>
       Managed IT assets, network infrastructure, and system maintenance
       Provided first-line technical support for hardware, software, and
       networking Developed and maintained the HR Management System (EMSys)
       Implemented a centralized data management system Managed company website,
       social media, and digital content
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'Junior Executive ',
   content: (
    <div className='flex flex-col gap-4'>
     {/* header */}
     <div className='flex flex-row gap-3'>
      {/* logo */}
      <div>
       <img src={nbc} alt='NBC' className='h-10 w-auto' />
      </div>
      {/* name */}
      <div>
       <h3>Nature's Beauty Creation</h3>
       <p>August 2023 - August 2024</p>
      </div>
     </div>
     {/* description */}
     <div>
      <p>
       Promoted role with increased responsibility in testing, coordinating, and
       supporting enterprise sales platforms.
      </p>
      <p>
       Led User Acceptance Testing (UAT) for sales systems Analyzed, tracked,
       and reported system defects Coordinated issue resolution with development
       teams Ensured sales data accuracy and reporting reliability Supported
       system upgrades and operational improvements
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'Sales Systems Intern ',
   content: (
    <div className='flex flex-col gap-4'>
     {/* header */}
     <div className='flex flex-row gap-3'>
      {/* logo */}
      <div>
       <img src={nbc} alt='NBC' className='h-10 w-auto' />
      </div>
      {/* name */}
      <div>
       <h3>Nature's Beauty Creation</h3>
       <p>August 2023 - August 2024</p>
      </div>
     </div>
     {/* description */}
     <div>
      <p>
       Entry-level role focused on learning and supporting enterprise sales
       systems through hands-on testing and validation.
      </p>
      <p>
       Assisted in User Acceptance Testing (UAT) activities Logged and
       documented system bugs and test results Verified sales data and basic
       system outputs Supported sales teams with system-related queries Gained
       exposure to enterprise sales workflows
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'BSc (HONS) Software Engineering',
   content: (
    <div className='flex flex-col gap-4'>
     {/* header */}
     <div className='flex flex-row gap-3'>
      {/* logo */}
      <div>
       <img src={ply} alt='Plymouth University' className='h-10 w-auto' />
      </div>
      {/* name */}
      <div>
       <h3>PLymouth University</h3>
       <p>August 2023 - August 2024</p>
      </div>
     </div>
     {/* description */}
     <div>
      <p>
       BSc (Hons) in Software Engineering, Second Class Upper (2:1), with
       practical experience in full-stack development, algorithms, databases,
       mobile apps, IoT, AI/ML, and software project management. Active
       volunteer with the university FOSS Club, contributing to open-source
       projects.
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'SLCCLC',
   content: (
    <div className='flex flex-col gap-4'>
     {/* header */}
     <div className='flex flex-row gap-3'>
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
       <h3>Ranaviru Information Technology Training Institute</h3>
       <p>January 2017 - May 2017</p>
      </div>
     </div>
     {/* description */}
     <div>
      <p>
       Completed foundational computer training covering MS Office applications,
       internet and email usage, and basic computer hardware concepts, building
       essential digital and IT skills that supported further studies and
       professional work in software and IT systems.
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'Core Infrastructure',
   content: (
    <div className='flex flex-col gap-4'>
     {/* header */}
     <div className='flex flex-row gap-3'>
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
       <h3>Google Cloud Fundamentals</h3>
       <p>May 2024</p>
      </div>
     </div>
     {/* description */}
     <div>
      <p>
       Completed training focused on understanding the core services and
       infrastructure of Google Cloud Platform (GCP). Gained hands-on knowledge
       of cloud resource organization, identity and access concepts, basic
       infrastructure setup, and cloud storage options, building a strong
       foundation in cloud-based application and system deployment.
      </p>
     </div>
    </div>
   ),
  },
  {
   title: 'Intro to Generative AI',
   content: (
    <div className='flex flex-col gap-4'>
     {/* header */}
     <div className='flex flex-row gap-3'>
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
       <h3>Google Cloud Fundamentals</h3>
       <p>May 2024</p>
      </div>
     </div>
     {/* description */}
     <div>
      <p>
       Completed a specialization covering core Generative AI concepts,
       including Large Language Models (LLMs) and Responsible AI practices.
       Gained a practical understanding of how generative models work, key AI
       use cases, and how to apply ethical and responsible AI principles using
       Google Cloud technologies.
      </p>
     </div>
    </div>
   ),
  },
 ];
 return (
  <section id={id} className='relative mx-auto max-w-6xl py-20 overflow-clip'>
   <h1
    className='text-center text-gradient font-poppins font-semibold text-4xl lg:text-5xl mb-5 pt-10 pb-10 '
    data-aos='fade-up'
   >
    Experience & Education
   </h1>
   <Timeline data={data} />
  </section>
 );
};

export default Experience;
