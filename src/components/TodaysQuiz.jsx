import "./todaysQuiz.css";
import todaysArt1 from "../assets/img/todaysart1.jpeg";
import TodaysArtTextComponent from "./TodaysArtTextComponent.jsx";
import Button from "react-bootstrap/Button";
import { todaysArtData } from "../api/data.js";
import NavBar2 from "./NavBar2.jsx";

function TodaysQuiz() {
    return (
        <>
            <div className="todays-site-container">
                <NavBar2 />

                <div className="todays-art-container">

                    <div className="todays-art-title-container">
                        <h1 className="todays-art-title">Oh, hey! Do you remember this?</h1>
                        <h4>...if you do and you're ready for today's quiz, keep scrolling!</h4>
                    </div>
                    <div className="todays-art-img-container"><img src={todaysArt1} alt="some art" className="todays-art-img" /></div>

                    <div className="todays-art-text">
                        <TodaysArtTextComponent label="Artist" data1={todaysArtData[0].artist} data2={todaysArtData[0].artistDates} />
                        <TodaysArtTextComponent label="Title" data1={todaysArtData[0].title1} data2={todaysArtData[0].title2} />
                        <TodaysArtTextComponent label="Date" data1={todaysArtData[0].date} />
                        <TodaysArtTextComponent label="Work Type" data1={todaysArtData[0].workType} />
                        <TodaysArtTextComponent label="Culture" data1={todaysArtData[0].culture} />
                    </div>

                    <Button type="submit" id="todays-quiz-btn" size="lg">Today's Quiz</Button>
                </div>
            </div>
        </>
    );
}

export default TodaysQuiz;