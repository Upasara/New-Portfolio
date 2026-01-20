import React from 'react';
import Stack from '../Stack';
import ME from '../../assets/me.jpg';
import F1 from '../../assets/f1.jpg';
import GYM from '../../assets/gym.jpg';

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

const Bio = ({ id }) => {
 return (
  <section id={id} className='min-h-screen bg-green-100 '>
   <h1>Me</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 bg-amber-50'>
    <div className='flex items-center justify-center w-80 h-64 mx-auto'>
     <Stack
      randomRotation={true}
      sensitivity={150}
      sendToBackOnClick={true}
      cards={images.map((src, i) => (
       <div key={i} className='bg-white'>
        <img
         src={src.image}
         alt={src.text}
         className=' w-full h-full  object-cover object-center '
        />
        <p>{src.text}</p>
       </div>
      ))}
     />
    </div>
    <div className='flex items-center '>
     <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, esse ratione
      asperiores quibusdam, inventore magnam pariatur nihil ad doloremque
      temporibus eum, eius nobis quae perspiciatis voluptatem incidunt dolore!
      Ea, doloribus.
     </p>
    </div>
   </div>
  </section>
 );
};

export default Bio;
