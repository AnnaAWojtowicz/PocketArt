import "./todaysArt.css";
import todaysArt1 from "../assets/img/todaysart1.jpeg";

function TodaysArt() {
    return (
        <>
            <div className="logo-todays-art">PocketArt</div>
            <div className="todays-art-container">
                <div className="todays-art-img"><img src={todaysArt1} alt="Girl in a jacket" width="500" height="600" /></div>
                <div className="todays-art-text">
                    <div className="todays-art-artist">Artist</div>
                    <div className="todays-art-title">Title</div>
                    <div className="todays-art-date">Date</div>
                    <div className="todays-art-medium">Medium</div>
                    <div className="todays-art-culture">Culture</div>
                </div>
            </div>

        </>
    )
}

export default TodaysArt;