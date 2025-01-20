import './App.css'
import Nav from './assets/components/Nav1.jsx'
import Footer from './assets/components/Footer.jsx'




function Home() {
  return (
    <>
      <Nav />
      <span className="discover">discover </span>
      <span id="art">Art</span>
      <span className="discover">  every day</span>
      <Footer />
    </>
  )
}



function App() {


  return (
    <>

      <Home />

    </>
  )
}

export default App
