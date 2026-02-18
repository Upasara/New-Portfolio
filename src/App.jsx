import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero from './components/web/hero';
import Bio from './components/web/bio';
import Projects from './components/web/projects';
import Skills from './components/web/skills';
import Experience from './components/web/experience';
import Contact from './components/web/contact';

import Navbar from './components/web/navbar';
import ClickSpark from './components/ClickSpark';
import { useState } from 'react';
import { ConfettiBackground } from './components/ui/confetti';
import { Toaster } from 'sonner';

function App() {
 const [activeSection, setActiveSection] = useState('hero');

 // Initialize AOS and Lenis smooth scroll
 useEffect(() => {
  Aos.init({ duration: 1000, once: false });
 }, []);

 //auto scroll highlight
 /* =========================
     AUTO NAVBAR HIGHLIGHT
  ========================== */
 useEffect(() => {
  const sections = [
   'hero',
   'bio',
   'projects',
   'skills',
   'experience',
   'contact',
  ];

  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      setActiveSection(entry.target.id);
     }
    });
   },
   {
    rootMargin: '-40% 0px -40% 0px',
    // Activates section when near center of screen
   }
  );

  sections.forEach((id) => {
   const el = document.getElementById(id);
   if (el) observer.observe(el);
  });

  return () => {
   sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.unobserve(el);
   });
  };
 }, []);

 const scrollToSection = (id, duration = 900) => {
  const target = document.getElementById(id);
  if (!target) return;
  const navbarHeight = 80;

  const startY = window.scrollY;
  const targetY =
   target.getBoundingClientRect().top + window.scrollY - navbarHeight;

  const distance = targetY - startY;
  const startTime = performance.now();

  const easeInOutCubic = (t) =>
   t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animate = (currentTime) => {
   const elapsed = currentTime - startTime;
   const progress = Math.min(elapsed / duration, 1);

   const easedProgress = easeInOutCubic(progress);

   window.scrollTo(0, startY + distance * easedProgress);

   if (progress < 1) {
    requestAnimationFrame(animate);
   }
  };

  requestAnimationFrame(animate);
 };

 return (
  <div className=' text-indigoo-900 bg-transparent '>
   <ClickSpark
    sparkColor='#000000'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
   >
    <Navbar navigate={scrollToSection} activeSection={activeSection} />
    <Hero id='hero' navigate={scrollToSection} />
    <Bio id='bio' navigate={scrollToSection} />
    <Projects id='projects' />
    <Skills id='skills' />
    <Experience id='experience' />
    <Contact id='contact' />
    <Toaster richColors />
   </ClickSpark>
   <ConfettiBackground />
  </div>
 );
}

export default App;
