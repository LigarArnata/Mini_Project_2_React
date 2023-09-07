import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = () => {
        const payload = {
            email : email,
            password : password
        }
        axios 
        .post("https://reqres.in/api/register", payload)
        .then((res)=>{
            console.log(res);
            localStorage.setItem('token', res.data.token);
            navigate("/login")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ fontSize: "45px", marginBottom: "10px" }}>Register</h1><br/><br/>
            <div>
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
                    placeholder="Password"/>
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
                    onClick={handleRegister}>Register
                </button>
            </div>
        </div>
    )
}

export default Register;