import "./todaysArt.css";
import { todaysArtData } from "../api/data.js";


function TodaysArtTextComponent(props) {
    return (
        <div className="todays-art-info" id="">
            <span className="todays-art-label">{props.label}</span>
            <span className="todays-art-details-container">
                <div className="todays-art-details-1">{props.data1}</div>
                <div className="todays-art-details-2">{props.data2}</div>
                {/* <div className="todays-art-details-3"><span className="former-title">Former Title:</span> {todaysArtData[1].title3}</div> */}
            </span>
        </div>
    )
};

export default TodaysArtTextComponent;