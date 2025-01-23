import "./bigButton.css"

function BigButton() {
    return (
        <div className="big-buttons-container">
            <button className="big-button" id="big-button-1"><span>Today's Art</span></button>
            <button className="big-button" id="big-button-2"><span>Quiz</span></button>
        </div>
    )
}

export default BigButton;