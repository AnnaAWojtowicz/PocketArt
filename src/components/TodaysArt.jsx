import "./todaysArt.css";
import todaysArt1 from "../assets/img/todaysart1.jpeg";

function TodaysArt() {
    return (
        <>
            <div className="todays-art-logo">PocketArt</div>
            <div className="todays-art-container">
                <div className="todays-art-img"><img src={todaysArt1} alt="Girl in a jacket" width="500" height="600" /></div>

                <div className="todays-art-text">

                    <div className="todays-art-info" id="todays-art-artist">
                        <span className="todays-art-label">Artist</span>
                        <span className="todays-art-details-container">
                            <div className="todays-art-details-1">John La Farge</div>
                            <div className="todays-art-details-2">American (New York, NY 1835 - 1910 Providence, RI)</div>
                        </span>
                    </div>

                    <div className="todays-art-info" id="todays-art-title">
                        <span className="todays-art-label">Title</span>
                        <span className="todays-art-details-container">
                            <div className="todays-art-details-1">When the Morning Stars Sang Together</div>
                            <div className="todays-art-details-2">All the Sons of God Shouted for Joy</div>
                            {/* <div className="todays-art-details-3"><span className="former-title">Former Title:</span> When the Morning Stars Sang Together</div> */}
                        </span>
                    </div>

                    <div className="todays-art-info" id="todays-art-date">
                        <span className="todays-art-label">Date</span>
                        <span className="todays-art-details-container">
                            <div className="todays-art-details-2">c. 1884-1885</div>
                        </span>
                    </div>

                    <div className="todays-art-info" id="todays-art-medium">
                        <span className="todays-art-label">Medium</span>
                        <span className="todays-art-details-container">
                            <div className="todays-art-details-2">Stained Glass</div>
                        </span>
                    </div>


                    <div className="todays-art-info" id="todays-art-culture">
                        <span className="todays-art-label">Culture</span>
                        <span className="todays-art-details-container">
                            <div className="todays-art-details-2">American</div>
                        </span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default TodaysArt;