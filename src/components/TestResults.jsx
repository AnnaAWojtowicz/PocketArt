import "./TestResults.css";
import NavBar2 from "./NavBar2";
import TestResult from "./TestResult";



// i need to map the test results here
// i need to get the test results from the database

export default function TestResults() {
    return (
        <>
            <div className="todays-site-container">
                <NavBar2 />
                <div className="test-results-container">
                    <h1 id="test-results-title">Quiz Hall of Fame</h1>

                    <TestResult />
                    <TestResult />
                    <TestResult />
                </div>
            </div>
        </>
    )
}