import React, { useState } from "react";
import "./signup.css"
import { Link } from "react-router-dom";
import firebase from "./firebaseConfig";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [RePassword, setRePassword] = useState('')
    const [name, setName] = useState('')
    const [part, setPart] = useState('')

    const submit = async(e) => {
        e.preventDefault()
        try{
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
            if (user){
                alert("Account Created successfully")
            }
        }
        catch (error){
            alert(error)
        }
    }

    return(
    <>
        <div className="signup">
        <div className="email">
            <input 
                type = 'text' 
                value = {email} 
                placeholder='이메일를 입력해주세요' 
                onChange={(e)=>setEmail(e.target.value)}
            ></input>
        </div>
        <div className="password">
            <input 
                type = 'text' 
                value = {password} 
                placeholder='비밀번호를 입력해주세요'
                onChange={(e)=>setPassword(e.target.value)}
            ></input>
        </div>
        <div className="RePassword">
            <input 
                type = 'text' 
                value = {RePassword} 
                placeholder='비밀번호를 한 번 더 입력해주세요'
                onChange={(e)=>setRePassword(e.target.value)}
            ></input>
        </div>
        </div>
        <div className="two">
            <div className="name">
                <input 
                    type = 'text' 
                    value = {name}
                    placeholder='이름을 입력해주세요.'
                    onChange={(e)=>setName(e.target.value)}
                ></input>
            </div>
            <div className="part">
                <input 
                    type = 'text' 
                    value = {part}
                    placeholder='파트를 입력 해주세요.'
                    onChange={(e) => setPart(e.target.value)}
                ></input>
            </div>
        </div>
        <button onClick={submit}>회원가입</button>
        <p><Link to = "/login">Login Now</Link></p>
    </>
    )
}

export default Signup