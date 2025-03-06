import "./getIn.css";
import CreateAccount from "./CreateAccount.jsx";
import LogIn from "./LogIn.jsx";
import GetInForm from "./GetInForm.jsx";

function GetIn() {
    return (<>
        <div className="get-in-container">
            <span className="form-get-in">
                {/* <CreateAccount /> */}
                {/* <LogIn /> */}
                <GetInForm />
            </span>
            <span className="background-get-in"></span>
        </div>
    </>)
}

export default GetIn;