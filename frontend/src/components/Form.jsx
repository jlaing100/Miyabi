import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "./LoadingIndicator";
import Header from "./Header";
import { Link } from "react-router-dom";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Add error state
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const formContainerStyle = {
        width: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "50px",
        height: "300px",
        borderColor: "#a0583c",
    };

    const formInputStyle = {
        width: "100%",
        marginBottom: "10px",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        outline: "none",
        textAlign:"center",
    };

    const formButtonStyle = {
        width: "100%",
        padding: "10px",
        backgroundColor: "#a0583c",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    const h1Style = {
        textAlign: "center",
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/", {loggedIn : true});
            } else {
                navigate("/login");
            }
        } catch (error) {
            setError(error.response.data.detail); // Set error message from API response
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div style={containerStyle}>
                <form onSubmit={handleSubmit} style={formContainerStyle}>
                    <h2 style={h1Style}>{name}</h2>
                    <input
                        style={formInputStyle}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        style={formInputStyle}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {loading && <LoadingIndicator />}
                    {error && <div style={{ color: "red" }}>{error}</div>} {/* Render error message */}
                    <button style={formButtonStyle} type="submit">
                        {name}
                    </button>
                    {(method == "login") && <Link to ="/register" className = "mt-3 text-decoration-none text-dark"> Dont have an Account? <span className="text-primary">Register</span></Link>}
                    {(method == "register") && <Link to ="/login" className = "mt-3 text-decoration-none text-dark"> Have an Account? <span className="text-primary">Login</span></Link>}

                    
                </form>
            </div>
        </>
    );
}

export default Form;
