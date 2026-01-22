import React from 'react';

const GradientIcon = ({ Icon, size = 24 }) => {
 const gradientId = `grad-${Math.random().toString(36).slice(2, 9)}`;

 return (
  <svg width={size} height={size} viewBox='0 0 24 24'>
   <defs>
    <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='100%'>
     <stop offset='0%' stopColor='#7c3aed' />
     <stop offset='50%' stopColor='#9333ea' />
     <stop offset='100%' stopColor='#d946ef' />
    </linearGradient>
   </defs>

   <Icon
    width={size}
    height={size}
    stroke={`url(#${gradientId})`}
    fill='none'
   />
  </svg>
 );
};

export default GradientIcon;
