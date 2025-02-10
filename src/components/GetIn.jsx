import "./getIn.css";
import CreateAccount from "./CreateAccount.jsx";
import LogIn from "./LogIn.jsx";

function GetIn() {
    return (<>
        <div className="get-in-container">
            <span className="form-get-in">
                {/* <CreateAccount /> */}
                <LogIn />
            </span>
            <span className="background-get-in"></span>
        </div>
    </>)
}

export default GetIn;