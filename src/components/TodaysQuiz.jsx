import "./todaysQuiz.css";
import todaysArt1 from "../assets/img/todaysart1.jpeg";
import TodaysArtTextComponent from "./TodaysArtTextComponent.jsx";
import Button from "react-bootstrap/Button";
import { todaysArtData } from "../api/data.js";
import NavBar2 from "./NavBar2.jsx";
import QuizModal from "./QuizModal.jsx";
import SuccessQuizModal from "./SuccessQuizModal.jsx";
import { useState } from 'react';
import FailQuizModal from "./FailQuizModal.jsx";




function TodaysQuiz() {
    // QuizModal
    const [showQuizModal, setShowQuizModal] = useState(false);

    const handleCloseQuizModal = () => setShowQuizModal(false);
    const handleShowQuizModal = () => setShowQuizModal(true);

    // SuccessQuizModal
    // const [showSuccessQuizModal, setShowSuccessQuizModal] = useState(false);

    // const handleCloseSuccessQuizModal = () => setShowSuccessQuizModal(false);
    // const handleShowSuccessQuizModal = () => setShowSuccessQuizModal(true);

    // FailedQuizModal
    const [showFailQuizModal, setShowFailQuizModal] = useState(false);

    const handleCloseFailQuizModal = () => setShowFailQuizModal(false);
    const handleShowFailQuizModal = () => setShowFailQuizModal(true);

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
                    {!showQuizModal && (
                        <div className="todays-art-text">
                            <TodaysArtTextComponent label="Artist" data1={todaysArtData[0].artist} data2={todaysArtData[0].artistDates} />
                            <TodaysArtTextComponent label="Title" data1={todaysArtData[0].title1} data2={todaysArtData[0].title2} />
                            <TodaysArtTextComponent label="Date" data1={todaysArtData[0].date} />
                            <TodaysArtTextComponent label="Work Type" data1={todaysArtData[0].workType} />
                            <TodaysArtTextComponent label="Culture" data1={todaysArtData[0].culture} />
                        </div>
                    )}
                    <Button type="submit" id="todays-quiz-btn" size="lg" onClick={handleShowQuizModal}>Today's Quiz</Button>
                </div>
                <QuizModal
                    show={showQuizModal}
                    handleClose={handleCloseQuizModal}
                    // handleShowSuccessQuizModal={handleShowSuccessQuizModal}
                    handleShowFailQuizModal={handleShowFailQuizModal}
                    backdrop="static"
                    keyboard={false} />
                {/* <SuccessQuizModal
                    show={showSuccessQuizModal}
                    handleClose={handleCloseSuccessQuizModal} */}
                {/* handleShowPointsStats={handleShowPointsStats}
                    handleShowHomeSite={handleShowHomeSite} */}
                {/* backdrop="static"
                    keyboard={false}
                /> */}
                <FailQuizModal
                    show={showFailQuizModal}
                    handleClose={handleCloseFailQuizModal}
                    backdrop="static"
                    keyboard={false}
                />
            </div>
        </>
    );
}

export default TodaysQuiz;