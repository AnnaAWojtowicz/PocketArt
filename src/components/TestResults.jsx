import "./TestResults.css";
import NavBar2 from "./NavBar2";
import TestResult from "./TestResult";
import { userData } from "../api/userData";


let scoreList = userData.sort((a, b) => b.userScore - a.userScore);



export default function TestResults() {
    return (
        <>
            <div className="todays-site-container">
                <NavBar2 />
                <div className="test-results-container">
                    <h1 id="test-results-title">Quiz Hall of Fame</h1>
                    {scoreList.map((user, index) => <TestResult key={user.userName} name={user.userName} score={user.userScore} position={index + 1} />)}
                </div>
            </div>
        </>
    )
}