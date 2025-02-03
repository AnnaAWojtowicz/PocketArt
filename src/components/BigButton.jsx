import "./bigButton.css"
import { useState } from 'react'
import WelcomeModal from './WelcomeModal.jsx'



function BigButton() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="big-buttons-container">
            <button className="big-button" id="big-button-1"><span>Today's Art</span></button>
            <button className="big-button" id="big-button-2" onClick={() => setModalShow(true)}><span>Today's Quiz</span></button>

            <WelcomeModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default BigButton;