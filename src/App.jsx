import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/components/Nav'
import Footer from './assets/components/Footer'




function Home() {
  return (
    <>
      <Nav />
    </>
  )
}



function App() {


  return (
    <>

      <Home />
      <span class="discover">discover </span>
      <span id="art">Art</span>
      <span class="discover">  every day</span>
      <Footer />
    </>
  )
}

export default App
