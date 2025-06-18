import { gsap } from "gsap"
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".box", {
      scrollTrigger: {
        trigger : ".box",
        toggleActions : "play none none none"
      }, // just trigger on scroll
      x: 900,
      rotation: 360,
      duration: 5,
    });
  }, []);
  return (

   <>
      <div className="box"></div>
   </>
  )
}

export default App
