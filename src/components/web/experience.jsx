import React from 'react';
import { Timeline } from '../ui/timeline';

//images
import pemco from '../../assets/comapany_logo/pemco.png';
import nbc from '../../assets/comapany_logo/nbc.png';
import ply from '../../assets/comapany_logo/ply.png';
import ritti from '../../assets/comapany_logo/ritti.png';

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
       Tested and validated a new internal sales system, identified bugs, and
       collaborated with the sales team to improve system reliability.
      </p>
     </div>
    </div>
   ),
  },
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
       Tested and validated a new internal sales system, identified bugs, and
       collaborated with the sales team to improve system reliability.
      </p>
     </div>
    </div>
   ),
  },
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
       Tested and validated a new internal sales system, identified bugs, and
       collaborated with the sales team to improve system reliability.
      </p>
     </div>
    </div>
   ),
  },
 ];
 return (
  <section id={id} className='relative mx-auto max-w-5xl py-20 p'>
   <Timeline data={data} />
  </section>
 );
};

export default Experience;
