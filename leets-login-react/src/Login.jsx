import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { firebaseAuth, signInWithEmailAndPassword } from "./firebase";
import Signup from "./Signup";

const Login = () => {
    const [typingEmail, setTypingEmail] = useState('')
    const [typingPassword, setTypingPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [loginbutton, setLoginButton] = useState(false)

    const nav = useNavigate()

    const loginEmail= (e) => {
        setTypingEmail(e.target.value)
    }

    const loginPassword = (e) => {
        setTypingPassword(e.target.value)
    }

    const login = async () => {
        try {
            // setErrorMsg('')
            await signInWithEmailAndPassword(firebaseAuth, typingEmail, typingPassword)
            // setTypingEmail('')
            // setTypingPassword('')
            nav('/SuccessLogin')
        } catch(err){
            if(err.code === 'auth/user-not-found'){
                setErrorMsg('이메일이 존재하지 않습니다!');
                setLoginButton(true)
            } else if (err.code === 'auth/wrong-password'){
                setErrorMsg('비밀번호가 일치하지 않습니다!')
            } else {
                setErrorMsg('이메일이 존재하지 않습니다')
                setLoginButton(true)
            }
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        login()
        Signup()
    }

    return(
    <section className="login_main" onSubmit={onSubmit}>
        <div className="login">
            <div className="email">
                <input 
                    type = 'text' 
                    value = {typingEmail} 
                    placeholder='이메일를 입력해주세요' 
                    onChange={(e)=>setTypingEmail(e.target.value)}
                ></input>
            </div>
            <div className="password">
                <input 
                    type = 'text' 
                    value = {typingPassword} 
                    placeholder='비밀번호를 입력해주세요'
                    onChange={(e)=>setTypingPassword(e.target.value)}
                ></input>
            </div>
        </div>
        <button 
            className="login_button" 
            onClick={login}
        >로그인하기</button>
        {errorMsg && <p className="error">{errorMsg}</p>}
    </section>
    )
}

export default Login