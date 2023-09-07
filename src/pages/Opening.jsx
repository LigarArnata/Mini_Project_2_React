import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Opening = () => {

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Logo/>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
                <h2 style={{ fontSize: "30px", margin: "0 10px", color: "#333" }}>Login</h2>
            </Link>
            <Link to={"/register"} style={{ textDecoration: "none" }}>
                <h2 style={{ fontSize: "30px", margin: "0 10px", color: "#333" }}>Register</h2>
            </Link>
        </div>
    )
}

export default Opening;