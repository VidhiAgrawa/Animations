import { useEffect, useState } from 'react'
import gsap from 'gsap'
import './App.css'
import doorleft from "./doorLeft.svg"
import doorright from "./doorRight.svg"
function App() {
  useEffect( () => {
    gsap.fromTo(
      ".doorleft",
      {
        left: 0,
      rotateY: 0,
      duration: 1
      },
      {
        left: "-28%",
      rotateY: -90,
      duration: 1,
      ease: "power2.inOut"
      }
    )
    gsap.fromTo(
      ".doorright",
      {
      right: "-3%",
      rotateY: 0,
      duration: 1
      },
      {
      right: "-28%",
      rotateY: 90,
      duration: 1,
      ease: "power2.inOut"
      }
    )

  }, [] )
  return (
    <>
      
      <div className="menu-boxes flex">
        <div className="menuBox1 baksa flex">
          <img src={doorleft}  className='doorleft door' />
          <img src={doorright} className='doorright door' />
        </div>
        
      </div>
    </>
  )
}

export default App
