import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap'
import chocobar from "./chocobar.svg"

function App() {
  useEffect( () => {
    gsap.fromTo(
      ".bar-img1",
      {
        x: -400,
        y : 0,
        duration : 2,
        opacity: 0,
        rotate: 0,
      },
      {
        x: 110,
        y : 40,
        duration: 2,
        opacity: 1,
        rotate: 30,
        
      }
    );
    gsap.fromTo(
      ".bar-img2",
      {
        x: 400,
        y : 0,
        duration : 2,
        opacity: 0,
        rotate: 0,
      },
      {
        x: -110,
        y: 40,
        duration: 2,
        opacity: 1,
        rotate: -30,
      }
    );
    gsap.fromTo(
      ".bar-img3",
      {
        y :  150,
        duration : 2,
        opacity: 0,
      },
      {
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );


  }, []);

  return (
    <>
      <div className="chocobars flex">
        <div className="bar1 bars">
          <img src={chocobar} className='bar-img1' />
        </div>
        <div className="bar2 bars">
          <img src={chocobar} className='bar-img2' />
        </div>
        <div className="bar3 bars">
          <img src={chocobar} className='bar-img3' />
        </div>
      </div>
    </>
  )
}

export default App
