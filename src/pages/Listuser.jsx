import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Listuser = () => {

    const [users, setUsers] = useState ([]);

    const getUsers = () => {
        axios
        .get('https://reqres.in/api/users?page=2')
        .then((res)=>{
            setUsers(res?.data?.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect (()=>{
        getUsers()
    }, [])

    return(
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>List User</h1>
            {Array.from(users).map((item, index) => (
            <div key={index} style={{ marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{item.first_name} {item.last_name}</h2>
                <img
                    src={item.avatar}
                    alt={`${item.first_name} ${item.last_name}'s avatar`}
                    style={{ width: "150px", borderRadius: "50%" }}/>
                <Link to="/userdetail" style={{ marginTop: "10px", fontSize: "18px", textDecoration: "none", color: "#007bff" }}>
                    <h3>Detail</h3>
                </Link>
            </div>
        ))}
    </div>
    )
}

export default Listuser;