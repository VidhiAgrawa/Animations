import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);
function App() {
  
  useEffect(() => {
    const contxt = gsap.context( () => {
      const data = gsap.utils.toArray(".content");
  
      gsap.to(data, {
        xPercent: -100 * (data.length - 1),
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: true
          
        }
      });

    } ) 

    return () => contxt.revert()

  }, []);

  return (
   <>
    <div className="heading flex">This is Home</div>
    <div className="container">
      <div className="content flex">Panel1</div>
      <div className="content flex">Panel2</div>
      <div className="content flex">Panel3</div>
    </div>
    <div className="footer flex">footer</div>
   </>

  );
}

export default App;
