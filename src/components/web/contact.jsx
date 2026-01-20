import React from 'react';
import { Field, FieldGroup, FieldLabel, FieldSet } from '../ui/field';
import { Input } from '../ui/input';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Button } from '../ui/button';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Contact = ({ id }) => {
 return (
  <section id={id} className='grid grid-cols-1 md:grid-cols-2'>
   {/* socials */}
   <div>
    <h1>Contact Me</h1>
    <div className='flex gap-4'>
     <Mail />
     <p>mihirangaupasara2000@gmail.com</p>
    </div>
    <div>
     <Phone />
     <p>071 5641 280</p>
    </div>
    {/* socials */}
    <div>
     <Button asChild>
      <a href=''>
       <Github />
      </a>
     </Button>
     <Button asChild>
      <a href=''>
       <Linkedin />
      </a>
     </Button>
     <Button asChild>
      <a href=''>
       <Instagram />
      </a>
     </Button>
    </div>
   </div>
   {/* form */}
   <div>
    <form>
     <FieldGroup>
      <FieldSet>
       <FieldGroup>
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
        </FieldGroup>
       </FieldGroup>
      </FieldSet>
     </FieldGroup>
    </form>
   </div>
  </section>
 );
};

export default Contact;
