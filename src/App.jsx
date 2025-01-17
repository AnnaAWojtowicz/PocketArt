import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/components/Nav'





function Home() {
  return (
    <>
      <Nav />
    </>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Home />
    </>
  )
}

export default App
