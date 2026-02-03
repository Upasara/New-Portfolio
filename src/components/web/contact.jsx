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

const Contact = ({ id }) => {
 const iconRef1 = useRef(null);
 const iconRef2 = useRef(null);
 return (
  <section id={id} className='grid grid-cols-1 md:grid-cols-2 p-5 pb-10'>
   {/* socials */}
   <div className='flex flex-col items-center'>
    <h1
     className='text-left text-gradient font-poppins font-semibold text-4xl lg:text-5xl pb-10 '
     data-aos='fade-up'
    >
     Contact Me
    </h1>
    <div
     className='flex mb-3 text-lg flex-col items-center'
     onMouseEnter={() => iconRef1.current.startAnimation()}
     onMouseLeave={() => iconRef1.current.stopAnimation()}
    >
     <h3 className='font-mono text-xl font-semibold tracking-wide'>Email</h3>

     <p className='flex gap-1 items-center text-base'>
      <AtSignIcon ref={iconRef1} size={18} />
      mihirangaupasara2000@gmail.com
     </p>
    </div>
    <div
     className='flex  mb-3 text-lg flex-col items-center'
     onMouseEnter={() => iconRef2.current.startAnimation()}
     onMouseLeave={() => iconRef2.current.stopAnimation()}
    >
     <h3 className='font-mono text-xl font-semibold tracking-wide'>Phone</h3>
     <p className='flex gap-1 items-center text-base'>
      <VibrateIcon ref={iconRef2} size={20} />
      071 5641 280
     </p>
    </div>
    {/* socials */}
    <div className='flex flex-col items-center'>
     <h3 className='font-mono text-xl font-semibold tracking-wide'>Social</h3>
     <div className='flex gap-4'>
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
   <div>
    <form>
     <FieldGroup>
      <FieldSet>
       <FieldGroup>
        <Field>
         <FieldLabel htmlFor='name'>Name</FieldLabel>
         <Input id='name' placeholder='John Doe' />
        </Field>
        <Field>
         <FieldLabel htmlFor='email'>E-mail</FieldLabel>
         <Input id='email' placeholder='johndoe@gmail.com' />
        </Field>
        <Field>
         <FieldLabel htmlFor='message'>Message</FieldLabel>
         <Input id='message' />
        </Field>
        <Field>
         <Button type='submit'>
          <Send />
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
