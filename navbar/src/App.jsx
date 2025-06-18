import { useState, useEffect } from 'react'
import './App.css'
import { gsap } from "gsap"
import { Timeline } from 'gsap/gsap-core'
function App() {
  useEffect( () => {
    const tl = gsap.timeline()
    tl.fromTo( ".logo", {
      y : -20,
      opacity : 0,
      duration : 1,
      delay : 0.2
      
    },{
      y : 0,
      opacity : 1,
      duration : 1
      
    } )
    tl.fromTo( "h3", {
      y : -20,
      opacity : 0,
      duration : 1,
      delay : 0.2,
      stagger: 0.5
      
    },
    {
      y : 0,
      opacity : 1,
      duration : 1,
      stagger: 0.5

  } )

  }, [] )
  return (
    <>
      <main className="navbar">
        <h1 className='logo'>Startup</h1>
        <div className="content">
          <h3>Home</h3>
          <h3>Login</h3>
          <h3>About us</h3>
          <h3>Contact us</h3>
        </div>
      </main>
    </>
  )
}

export default App
