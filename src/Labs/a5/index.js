import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
const URL = process.env.REACT_APP_API_BASE.substring(0, URL.length - 3);

function Assignment5() {
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