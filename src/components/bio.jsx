import React from 'react';
import AboutMePic from '../assets/about-me.png';

const Bio = () => {
 return (
  <div className='min-h-screen'>
   <h1>Me</h1>
   <div className='grid grid-cols-1 md:grid-cols-2'>
    <img src={AboutMePic} alt='About-Me' />
    <div>
     <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, esse ratione
      asperiores quibusdam, inventore magnam pariatur nihil ad doloremque
      temporibus eum, eius nobis quae perspiciatis voluptatem incidunt dolore!
      Ea, doloribus.
     </p>
    </div>
   </div>
  </div>
 );
};

export default Bio;
