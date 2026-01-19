import React from 'react';

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

const Experience = () => {
 return (
  <div className='relative mx-auto max-w-5xl py-20 p'>
   {/* Section Heading */}
   <h2 className='mb-16 text-center text-3xl font-bold'>
    Experience & Education
   </h2>

   {/* Center vertical line */}
   <div className='absolute left-4 top-44 bottom-40 h-full w-px bg-gray-300 md:left-1/2 md:-translate-x-1/2' />

   <div className='space-y-16'>
    {experiences.map((exp, index) => {
     const isLeft = index % 2 === 0;

     return (
      <div
       key={index}
       className={`relative flex w-full ${
        isLeft ? 'md:justify-start' : 'md:justify-end'
       }`}
      >
       {/* Timeline dot */}
       <span className='absolute left-2 top-6 h-4 w-4 rounded-full bg-black md:left-1/2 md:-translate-x-1/2' />

       {/* Card */}
       <div
        className={`
                  ml-12 w-full max-w-md rounded-lg border bg-white p-6 shadow-md
                  md:ml-0
                  ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}
                `}
       >
        <h3 className='text-lg font-semibold'>{exp.role}</h3>
        <p className='text-sm text-gray-500'>
         {exp.company} • {exp.period}
        </p>

        <p className='mt-3 text-sm text-gray-700'>{exp.description}</p>
       </div>
      </div>
     );
    })}
   </div>
  </div>
 );
};

export default Experience;
