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

function App() {
 useEffect(() => {
  //initialize AOS
  Aos.init({ duration: 1000 });

  //initialize lenis
  const lenis = new Lenis({
   duration: 0.5,
   smoothWheel: true,
   easing: (t) => t,
  });
  function raf(time) {
   lenis.raf(time);
   requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
 }, []);

 return (
  <div>
   <Hero />
   <Bio />
   <Projects />
   <Skills />
   <Experience />
  </div>
 );
}

export default App;
