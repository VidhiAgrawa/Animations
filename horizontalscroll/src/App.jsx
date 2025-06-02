import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Ensure DOM is ready before running GSAP animation
    setTimeout(() => {
      gsap.fromTo(".yellow", { 
        xPercent: 100,
        duration: 1,
        opacity: 0,
      },
      {
        xPercent : 0,
        opacity : 1
      }
    );

    }, 0);

  }, []);

  return (
    <main>
      
      <div className="container">
        <div className="panel yellow">Yellow</div>
        {/* <div className="panel red">Red</div>
        <div className="panel blue">Blue</div> */}
      </div>
    </main>
  );
}

export default App;
