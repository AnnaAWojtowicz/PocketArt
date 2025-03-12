import "./TestResults.css";




export default function TestResult({ name, score, position }) {

    return (
        <div className="result-row">
            <span>{position}</span>
            <span>{name}</span>
            <span>{score}</span>
        </div>
    )
}