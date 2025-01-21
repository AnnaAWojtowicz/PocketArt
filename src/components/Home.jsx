import "./Home.css"
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'


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

export default Home;