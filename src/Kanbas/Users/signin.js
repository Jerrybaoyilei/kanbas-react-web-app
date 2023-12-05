import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Kanbas/account");
    };
    return (
        <div className="container-fluid">
            <div className="m-4">
                <h1>Signin</h1>
                <div className="d-flex flex-column">
                    <input value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} className="form-control mb-3" />
                    <input value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} className="form-control mb-3" />
                </div>
                <button onClick={signin} className="btn btn-primary"> Signin </button>
            </div>
        </div>
    );
}
export default Signin;