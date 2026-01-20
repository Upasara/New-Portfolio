import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Lenis from 'lenis';
import { useEffect } from 'react';
import Hero from './components/web/hero';
import Bio from './components/web/bio';
import Projects from './components/web/projects';
import Skills from './components/web/skills';
import Experience from './components/web/experience';
import Contact from './components/web/contact';

import { useRef } from 'react';
import Navbar from './components/web/navbar';
import ClickSpark from './components/ClickSpark';
import FloatingLines from './components/FloatingLines';

function App() {
 const lenisRef = useRef(null);

 // Initialize AOS and Lenis smooth scroll
 useEffect(() => {
  Aos.init({ duration: 1000 });

  const lenis = new Lenis({
   duration: 0.5,
   smoothWheel: true,
   easing: (t) => t,
  });

  lenisRef.current = lenis;

  function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
 }, []);

 const scrollToSection = (id) => {
  if (!lenisRef.current) {
   return;
  }
  const el = document.getElementById(id);
  if (el) {
   lenisRef.current.scrollTo(el, { duration: 0.8 });
  }
 };

 return (
  <div>
   <ClickSpark
    sparkColor='#000000'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
   >
    <Navbar navigate={scrollToSection} />
    <Hero id='hero' />
    <Bio id='bio' />
    <Projects id='projects' />
    <Skills id='skills' />
    <Experience id='experience' />
    <Contact id='contact' />
   </ClickSpark>
  </div>
 );
}

export default App;
