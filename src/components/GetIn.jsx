import "./getIn.css";
import CreateAccount from "./CreateAccount.jsx";

function GetIn() {
    return (<>
        <div className="get-in-container">
            <span className="form-get-in">
                <CreateAccount />
            </span>
            <span className="background-get-in"></span>
        </div>
    </>)
}

export default GetIn;