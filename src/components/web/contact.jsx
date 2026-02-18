import React from 'react';
import { Field, FieldGroup, FieldLabel, FieldSet } from '../ui/field';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { AtSignIcon } from '../ui/at-sign';
import { VibrateIcon } from '../ui/vibrate';
import { GithubIcon } from '../ui/github';
import { LinkedinIcon } from '../ui/linkedin';
import { InstagramIcon } from '../ui/instagram';
import { LinkPreview } from '../ui/link-preview';
import { useRef } from 'react';
import { Send } from 'lucide-react';
import { Badge } from '../ui/badge';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = ({ id }) => {
 const iconRef1 = useRef(null);
 const iconRef2 = useRef(null);

 const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
   toast.error('Please fill in all fields !');
   return;
  }

  formData.append('access_key', '1ce66ddd-2fec-4a91-98b7-d16537caa77f');

  try {
   const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
   });

   const data = await res.json();
   if (data.success) {
    toast.success('Message sent successfully !');
    form.reset();
   } else {
    toast.error('Something went wrong ! Please try again.');
   }
  } catch {
   toast.error('Network error ! Please try again.');
  }
 };

 return (
  <section
   id={id}
   className='grid grid-cols-1 md:grid-cols-2 p-5 pb-10 pt-20 md:pt-28 bg-white/80 min-h-screen font-inter'
  >
   {/* socials */}
   <div className='flex flex-col items-center'>
    <h1
     className='text-left text-indigoo-600 text-shadow-sm font-poppins font-semibold text-4xl lg:text-5xl pb-10 '
     data-aos='fade-up'
     data-aos-delay={400}
    >
     Contact Me
    </h1>
    <div
     className='flex mb-7 text-lg flex-col items-center'
     onMouseEnter={() => iconRef1.current.startAnimation()}
     onMouseLeave={() => iconRef1.current.stopAnimation()}
     data-aos='fade-right'
     data-aos-delay={600}
    >
     <h3 className=' text-xl font-semibold tracking-wide text-indigoo-800'>
      Email
     </h3>

     <Badge className='mt-1 text-base bg-indigoo-50 text-indigoo-600'>
      <a
       href='mailto:mihirangaupasara2000@gmail.com'
       className='flex gap-2 items-center'
      >
       <AtSignIcon ref={iconRef1} size={18} />
       mihirangaupasara2000@gmail.com
      </a>
     </Badge>
    </div>
    <div
     className='flex  mb-7 text-lg flex-col items-center'
     onMouseEnter={() => iconRef2.current.startAnimation()}
     onMouseLeave={() => iconRef2.current.stopAnimation()}
     data-aos='fade-right'
     data-aos-delay={800}
    >
     <h3 className=' text-xl font-semibold tracking-wide text-indigoo-800'>
      Phone
     </h3>
     <Badge className='mt-1 text-base bg-indigoo-50 text-indigoo-600'>
      <a href='https://wa.me/+94715641280' className='flex gap-2  items-center'>
       <VibrateIcon ref={iconRef2} size={20} />
       071 5641 280
      </a>
     </Badge>
    </div>
    {/* socials */}
    <div
     className='flex flex-col items-center'
     data-aos='fade-right'
     data-aos-delay={1000}
    >
     <h3 className=' text-xl font-semibold tracking-wide mb-2'>Social</h3>
     <div className='flex gap-4 mt-1'>
      <LinkPreview url='https://github.com/Upasara'>
       <button className='bg-transparent cursor-pointer'>
        <GithubIcon className='text-indigoo-600' size={24} />
       </button>
      </LinkPreview>
      <LinkPreview url='https://www.linkedin.com/in/mihiranga-upasara/'>
       <button className='bg-transparent cursor-pointer'>
        <LinkedinIcon className='text-indigoo-600' size={24} />
       </button>
      </LinkPreview>
      <LinkPreview url='https://www.instagram.com/mihiranga.upasara/'>
       <button className='bg-transparent cursor-pointer'>
        <InstagramIcon className='text-indigoo-600' size={24} />
       </button>
      </LinkPreview>
     </div>
    </div>
   </div>
   {/* form */}
   <div className='px-0 md:px-15'>
    <form onSubmit={onSubmit} data-aos='fade-left' data-aos-delay={1200}>
     <FieldGroup>
      <FieldSet>
       <FieldGroup>
        <Field>
         <FieldLabel htmlFor='name' className=' text-lg font-medium'>
          Name
         </FieldLabel>
         <Input
          id='name'
          placeholder='John Doe'
          name='name'
          className='border-indigoo-300 focus-visible:border-indigoo-600 focus-visible:ring-indigoo-600 focus-visible:ring-1 duration-300 transition-all focus-visible:shadow-md focus-visible:shadow-indigoo-100 '
         />
        </Field>
        <Field>
         <FieldLabel htmlFor='email'>E-mail</FieldLabel>
         <Input
          id='email'
          placeholder='johndoe@gmail.com'
          name='email'
          className='border-indigoo-300 focus-visible:border-indigoo-600 focus-visible:ring-indigoo-600 focus-visible:ring-1 duration-300 transition-all focus-visible:shadow-md focus-visible:shadow-indigoo-100'
         />
        </Field>
        <Field>
         <FieldLabel htmlFor='message'>Message</FieldLabel>
         <Input
          id='message'
          name='message'
          className='border-indigoo-300 focus-visible:border-indigoo-600 focus-visible:ring-indigoo-600 focus-visible:ring-1 duration-300 transition-all focus-visible:shadow-md focus-visible:shadow-indigoo-100'
         />
        </Field>
        <Field>
         <Button
          type='submit'
          className='bg-indigoo-600 hover:bg-indigoo-600 hover:shadow-indigoo-200 shadow-md hover:shadow-lg group hover:scale-105 duration-300 hover:text-base '
         >
          <Send className='group-hover:scale-110 duration-300' />
          Send
         </Button>
        </Field>
       </FieldGroup>
      </FieldSet>
     </FieldGroup>
    </form>
   </div>
  </section>
 );
};

export default Contact;
