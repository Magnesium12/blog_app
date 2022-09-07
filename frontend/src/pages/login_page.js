import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Login = ()=>{
    const [errMsg, setErrMsg] = useState("");
    const login_user = ()=>{
        //e.preventDefault();
        let name = document.getElementById('username').innerText
        let psswrd = document.getElementById('password').innerText
        // const v1 = USER_REGEX.test(name);
        // const v2 = PWD_REGEX.test(psswrd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        axios.post(
            '/login/',
            {username: name, password: psswrd,},
            {withCredentials: true, headers: {'Content-Type': 'application/json'},}
        )
        .then(function (response){
            console.log(response)
            let status = response.status
            if(status==401){
                //setErrMsg("Wrong Username or Password")
            }
            else if(status==409){
                //setErrMsg("User already logged-in")
            }
            else{
                window.location.href = "http://localhost:3000"
            }
        })
        .catch(function (error) {
            console.log(error);
        })
        // axios({
        //     method:"post",
        //     url:`/login`,
        //     headers: { "Content-Type": "application/json"},
        // })
        // axios.get(`http://127.0.0.1:8000/blog/${id}`)
    }
    return (
        <div style={{paddingTop:"55px"}}>
            <form onSubmit={login_user}>
                <label>
                    Username:
                    <input type="text" name='username' id='username'></input>
                </label>
                <label>
                    Password:
                    <input type="password" name='password' id='password'></input>
                </label>
                <p style={{color:"red"}}>{errMsg}</p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login