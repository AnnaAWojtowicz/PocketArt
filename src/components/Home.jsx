import "./Home.css"
import Nav from './Nav.jsx'
import BigButton from "./BigButton.jsx"
import Footer from './Footer.jsx'


function Home() {
    return (
        <div className="home">
            <div className="home-img-opacity"> </div>
            <Nav />
            <div className="home-text-container">
                <div className="home-text-1">
                    <span className="discover">discover </span>
                    <span id="art">Art</span>
                </div>
                <div className="home-text-2">
                    <span className="discover">  every day</span>
                </div>
            </div>
            <BigButton />
            <Footer />
        </div>

    )
}

export default Home;