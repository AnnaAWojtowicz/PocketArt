import './App.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'




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
