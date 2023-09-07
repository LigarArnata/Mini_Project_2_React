import React, {useState, useEffect} from "react";
import axios from "axios";

const Userdetail = () => {

    const [user, setUser] = useState({})

    const getUsers = () => {
        axios 
        .get("https://reqres.in/api/users/2")
        .then((res)=>{
            console.log(res)
            setUser(res?.data?.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getUsers()
    }, [])


    return(
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>User Detail</h1>
            <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>User ID: {user.id}</h2>
            <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>{user.email}</h2>
            <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>{user.first_name} {user.last_name}</h2>
            <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}'s avatar`}
                style={{ width: "150px", borderRadius: "50%", marginBottom: "20px" }}/>
        </div>
    )
}

export default Userdetail;