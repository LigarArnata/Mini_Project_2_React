import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        const payload = {
            email : email,
            password : password
        }
        axios
        .post("https://reqres.in/api/login", payload)
        .then((res)=>{
            console.log(res);
            localStorage.setItem('token', res.data.token)
            navigate("/listuser")
        })
        .catch((err)=>{
            console.log(err.messagge);
            setErr(err.messagge);
        })

    }

    return(
    <>
        {!!err.length && <h1 style={{color : "red"}}>(err)</h1>}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ fontSize: "45px", marginBottom: "10px" }}>Login</h1><br/><br/>
            <input
                style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "10px",
                marginRight : "10px",
                width: "300px",
                fontSize: "16px",
                }}
                onChange={handleChangeEmail}
                placeholder="Email"/>
            <input
                style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginBottom: "10px",
                    marginRight : "10px",
                    width: "300px",
                    fontSize: "16px",
                }}
                onChange={handleChangePassword}
                placeholder="Password"
                type="password"/>
            <button
                style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
                onClick={handleLogin}>
                Login
            </button>
        </div>
    </>
    )
}

export default Login;