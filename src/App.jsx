import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Lenis from "lenis";
import { useEffect } from "react";
import Hero from "./components/web/hero";
import Bio from "./components/web/bio";
import Projects from "./components/web/projects";

function App() {
  useEffect(() => {
    //initialize AOS
    Aos.init({ duration: 1000 });

    //initialize lenis
    const lenis = new Lenis({
      duration: 0.8,
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
    </div>
  );
}

export default App;
