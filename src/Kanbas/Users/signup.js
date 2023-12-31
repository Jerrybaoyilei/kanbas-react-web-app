import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/kanbas/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div className="container-fluid">
            <div className="m-4">
                <h1>Signup</h1>
                {error && <div>{error}</div>}
                <input className="form-control mb-3"
                    value={credentials.username}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        username: e.target.value
                    })} />
                <input className="form-control mb-3"
                    value={credentials.password}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        password: e.target.value
                    })} />
                <button onClick={signup} className="btn btn-primary">
                    Signup
                </button>
            </div>
        </div>
    );
}
export default Signup;