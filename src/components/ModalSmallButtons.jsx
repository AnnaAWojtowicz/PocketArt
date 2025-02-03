import "./modalSmallButtons.css"


function ModalSmallButtons() {

    return (
        <div className="small-buttons-container">
            <button className="small-button" id="small-button-1">
                <div id="small-button-1-img"></div>
                <div id="small-button-1-label">sign in</div>
            </button>
            <button className="small-button" id="small-button-2"><div id="small-button-2-img"></div><div id="small-button-2-label">new user</div></button>
            <button className="small-button" id="small-button-3"><div id="small-button-3-img"></div><div id="small-button-3-label">guest</div></button>

        </div>
    )
}

export default ModalSmallButtons;