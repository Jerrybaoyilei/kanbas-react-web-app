import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";


function Assignment5() {
    console.log(process.env.REACT_APP_API_BASE);
    const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
    const URL = API_BASE.substring(0, API_BASE.length - 4);
    return (
        <div>
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${URL}/a5/welcome`} className="list-group-item">
                    Welcome
                </a>
            </div>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
    )
}

export default Assignment5;