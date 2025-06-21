import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap'
import chocobar from "./chocobar.svg"
import chocolatesplashleft from "./barBackSplashLeft.svg"
import chocolatesplashright from "./barBackSplashRight.svg"
import chocochip from "./chocoChip.svg"
function App() {
  useEffect( () => {
    gsap.fromTo(
      ".bar-img1",
      {
        x: -350,
        y : 0,
        duration : 2,
        opacity: 0.5,
        rotate: 0,
      },
      {
        x : 0,
        y: 0,
        duration: 2,
        opacity: 1,
        onComplete : () => {
            gsap.to( ".bar-img1" , {
                x: 110,
                y : 40,
                rotate: 20,
                onComplete : () => {
                  gsap.fromTo( ".splash-right", {
                    height: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                    duration: 1,
                    opacity: 0,
                  },
                  {
                    height: 420,
                    width: 370,
                    x : 195,
                    y: -10,
                    duration : 1,
                    opacity: 1,
                    onComplete: () => {
                      gsap.fromTo( ".choco-chip1",{
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0,
                        opacity: 0,
                        duration: 1,
                        // scale: 0.2,
                        rotate: 0
                      }, 
                      {
                        height: 45,
                        width: 51,
                        x: 350,
                        y: -150,
                        opacity: 1,
                        duration: 1,
                        // scale: 0.2,
                        rotate: -90
                      } )
                      gsap.fromTo( ".choco-chip2",
                        {
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0,
                        opacity: 0,
                        duration: 1,
                        // scale: 0.2,
                        rotate: 0
                      },
                        {
                          height: 45,
                        width: 51,
                        x: 500,
                        y: 90,
                        opacity: 1,
                        duration: 1,
                        // scale: 0.2,
                        rotate: -120
                      } )
                      gsap.fromTo( ".choco-chip3",
                        {
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0,
                        opacity: 0,
                        duration: 1,
                        // scale: 0.2,
                        rotate: 0
                      },
                        {
                          height: 45,
                        width: 51,
                        x: 250,
                        y: 200,
                        opacity: 1,
                        duration: 1,
                        // scale: 0.2,
                      } )
                    }
                  } )
                }
            } )

        }
        
      }
    );
    gsap.fromTo(
      ".bar-img2",
      {
        x: 350,
        y : 0,
        duration : 2,
        opacity: 0.5,
        rotate: 0,
      },
      {
        x: 0,
        y: 0,
        duration: 2,
        opacity: 1,
        onComplete : () => {
            gsap.to( ".bar-img2" , {
                x: -110,
                y : 40,
                rotate: -20,
                onComplete : () => {
                  gsap.fromTo( ".splash-left", {
                    height: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                    duration: 1,
                    opacity: 0,
                  },
                  {
                    height: 290,
                    width: 289,
                    x : -225,
                    y : -90,
                    duration : 1,
                    opacity: 1,
                    onComplete: () => {
                      gsap.fromTo( ".choco-chip4", 
                        {
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0,
                        opacity: 0,
                        duration: 1,
                        // scale: 0.2,
                        rotate: 0
                      },
                        {
                          height: 45,
                        width: 51,
                        x: -500,
                        y: -150,
                        opacity: 1,
                        duration: 1,
                        // scale: 0.2,
                      } )
                      gsap.fromTo( ".choco-chip5", 
                        {
                        height: 0,
                        width: 0,
                        x: 0,
                        y: 0,
                        opacity: 0,
                        duration: 1,
                        // scale: 0.2,
                        rotate: 0
                      },
                        {
                          height: 45,
                        width: 51,
                        x: -400,
                        y: 130,
                        opacity: 1,
                        duration: 1,
                        // scale: 0.2,
                        rotate: 120
                      } )
                    }
                  } )
                }
            } )

        }
      }
    );
    gsap.fromTo(
      ".bar-img3",
      {
        y :  130,
        duration : 2,
        opacity: 0.5,
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
          <img src={chocobar} className='bar-img1 bar-img' />
        </div>
        <div className="bar2 bars">
          <img src={chocobar} className='bar-img2 bar-img' />
        </div>
        <div className="bar3 bars">
          <img src={chocobar} className='bar-img3 bar-img' />
        </div>
        {/* splash */}
        <div className="chocolate-splash-left splash">
          <img src={chocolatesplashleft} className='splash-left' />
        </div>
        <div className="chocolate-splash-right splash">
          <img src={chocolatesplashright} className='splash-right' />
        </div>
        {/* chocochip */}
        <div className="chocochips">
          <img src={chocochip} className='choco-chip1 chippy' />
          <img src={chocochip} className='choco-chip2 chippy' />
          <img src={chocochip} className='choco-chip3 chippy' />
          <img src={chocochip} className='choco-chip4 chippy' />
          <img src={chocochip} className='choco-chip5 chippy' />

        </div>

      </div>
    </>
  )
}

export default App
