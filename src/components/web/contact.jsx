import React from 'react';
import { Field, FieldGroup, FieldLabel, FieldSet } from '../ui/field';
import { Input } from '../ui/input';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { AtSignIcon } from '../ui/at-sign';
import { VibrateIcon } from '../ui/vibrate';
import { GithubIcon } from '../ui/github';
import { LinkedinIcon } from '../ui/linkedin';
import { InstagramIcon } from '../ui/instagram';
import { LinkPreview } from '../ui/link-preview';
import { useRef } from 'react';
import { Send } from 'lucide-react';
import { Badge } from '../ui/badge';

const Contact = ({ id }) => {
 const iconRef1 = useRef(null);
 const iconRef2 = useRef(null);
 return (
  <section
   id={id}
   className='grid grid-cols-1 md:grid-cols-2 p-5 pb-10 pt-20 md:pt-28 bg-white min-h-screen font-inter'
  >
   {/* socials */}
   <div className='flex flex-col items-center'>
    <h1
     className='text-left text-indigoo-600 text-shadow-sm font-poppins font-semibold text-4xl lg:text-5xl pb-10 '
     data-aos='fade-up'
    >
     Contact Me
    </h1>
    <div
     className='flex mb-7 text-lg flex-col items-center'
     onMouseEnter={() => iconRef1.current.startAnimation()}
     onMouseLeave={() => iconRef1.current.stopAnimation()}
    >
     <h3 className=' text-xl font-semibold tracking-wide text-indigoo-800'>
      Email
     </h3>

     <Badge className='flex gap-2 mt-1 items-center text-base bg-indigoo-50 text-indigoo-600'>
      <AtSignIcon ref={iconRef1} size={18} />
      mihirangaupasara2000@gmail.com
     </Badge>
    </div>
    <div
     className='flex  mb-7 text-lg flex-col items-center'
     onMouseEnter={() => iconRef2.current.startAnimation()}
     onMouseLeave={() => iconRef2.current.stopAnimation()}
    >
     <h3 className=' text-xl font-semibold tracking-wide text-indigoo-800'>
      Phone
     </h3>
     <Badge className='flex gap-2 mt-1 items-center text-base bg-indigoo-50 text-indigoo-600'>
      <VibrateIcon ref={iconRef2} size={20} />
      071 5641 280
     </Badge>
    </div>
    {/* socials */}
    <div className='flex flex-col items-center'>
     <h3 className=' text-xl font-semibold tracking-wide mb-2'>Social</h3>
     <div className='flex gap-4 mt-1'>
      <LinkPreview url='https://github.com/Upasara'>
       <button className='bg-transparent cursor-pointer'>
        <GithubIcon className='text-purple-600' size={24} />
       </button>
      </LinkPreview>
      <LinkPreview url='https://www.linkedin.com/in/mihiranga-upasara/'>
       <button className='bg-transparent cursor-pointer'>
        <LinkedinIcon className='text-purple-600' size={24} />
       </button>
      </LinkPreview>
      <LinkPreview url='https://www.instagram.com/mihiranga.upasara/'>
       <button className='bg-transparent cursor-pointer'>
        <InstagramIcon className='text-purple-600' size={24} />
       </button>
      </LinkPreview>
     </div>
    </div>
   </div>
   {/* form */}
   <div className='px-0 md:px-15'>
    <form>
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
          className='border-purple-300 focus-visible:border-purple-600 focus-visible:ring-purple-600 focus-visible:ring-1 duration-300 transition-all focus-visible:shadow-md'
         />
        </Field>
        <Field>
         <FieldLabel htmlFor='email'>E-mail</FieldLabel>
         <Input
          id='email'
          placeholder='johndoe@gmail.com'
          className='border-purple-300 focus-visible:border-purple-600 focus-visible:ring-purple-600 focus-visible:ring-1 duration-300 transition-all focus-visible:shadow-md'
         />
        </Field>
        <Field>
         <FieldLabel htmlFor='message'>Message</FieldLabel>
         <Input
          id='message'
          className='border-purple-300 focus-visible:border-purple-600 focus-visible:ring-purple-600 focus-visible:ring-1 duration-300 transition-all focus-visible:shadow-md'
         />
        </Field>
        <Field>
         <Button
          type='submit'
          className='bg-gradient shadow-md hover:shadow-lg group hover:scale-105 duration-300 hover:text-base '
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
