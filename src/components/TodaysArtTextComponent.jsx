import "./todaysArt.css";
import { todaysArtData } from "../api/data.js";


function TodaysArtTextComponent() {
    return (
        <div className="todays-art-info" id="">
            <span className="todays-art-label">Title</span>
            <span className="todays-art-details-container">
                <div className="todays-art-details-1">When the Morning Stars Sang Together</div>
                <div className="todays-art-details-2">All the Sons of God Shouted for Joy</div>
                <div className="todays-art-details-3"><span className="former-title">Former Title:</span> When the Morning Stars Sang Together</div>
            </span>
        </div>
    )
};

export default TodaysArtTextComponent;