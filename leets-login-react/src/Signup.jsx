import React, { useState,useContext } from "react";
import "./Signup.css"
import { useNavigate } from "react-router-dom";
import { firebaseAuth , createUserWithEmailAndPassword } from "./firebase";
import { LoginContext } from "./App";

const Signup = () => {
    const { onCreateEmail, onCreatePassword, onCreateRePassword, onCreateName, onCreatePart, name, part, date }
    = useContext(LoginContext)

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [RePassword, setRePassword] = useState()
    const [sName, setName] = useState('')
    const [sPart, setPart] = useState('')
    const [checkEmail, setCheckEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')


    console.log(checkEmail)
  


    const signupEmail = (e) => {
        setRegisterEmail(e.target.value)
    }

    const signupPassword = (e) => {
        setRegisterPassword(e.target.value)
    }

    const signupCheckPassword = (e) => {
        setRePassword(e.target.value)
    }

    const signupName = (e) => {
        setName(e.target.value)
    } 

    const signupPart = (e) => {
        setPart(e.target.value)
    }

    const nav = useNavigate()

    const register = async() => {
        try{
            await createUserWithEmailAndPassword(firebaseAuth, registerEmail, registerPassword)
            setErrorMsg('');
            
            onCreateEmail(registerEmail)
            onCreatePassword(registerPassword)
            onCreateRePassword(RePassword)
            onCreateName(sName)
            onCreatePart(sPart)

            setRegisterEmail('')
            setRegisterPassword('')
            nav('/login')
        } catch (err){
            console.log(err)
            switch (err.code){
                case 'auth/weak-password':
                    setErrorMsg('비밀번호는 6자리 이상이어야 합니다.');
                    break;
                case 'auth/invalid-email':
                    setErrorMsg('잘못된 이메일 주소입니다');
                    break;
                case 'auth/wrong-password':
                    setErrorMsg('비밀번호가 일치하지 않습니다!');
                    break;
                case 'email-already-in-use':
                    setErrorMsg('이미 사용중인 이메일 입니다.')
                    break;
                default:
                    setErrorMsg('회원가입 중 오류가 발생하였습니다.');
            }
        }
    }


    const onCheck = async () => {
        try {
            const signInMethods = await createUserWithEmailAndPassword(firebaseAuth, registerEmail, 'akjsdfhlkajsdfhklasdfhlkajsdlkhfjahskdf');
            console.log(signInMethods);
            setCheckEmail('사용 가능한 이메일입니다!')
        } catch(error) {
            switch (error.code){
                case 'auth/invalid-email':
                    setErrorMsg('잘못된 이메일 주소입니다');
                    break;
               case 'email-already-in-use':
                    setErrorMsg('이미 사용중인 이메일 입니다.')
                    break;
                default:
                    setErrorMsg('사용할 수 없는 이메일입니다.');            
        }
    }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(registerPassword !== RePassword) {
            setErrorMsg('비밀번호가 일치하지 않습니다')
            return
        }
        register()
    };

    return(
    <section className="signup_main">
        <div className="signup">
            <div className="check">
                <div className="email">
                    <input 
                        type = 'text' 
                        value = {registerEmail} 
                        placeholder='이메일를 입력해주세요' 
                        onChange={(e)=>setRegisterEmail(e.target.value)}/>
                        <div>{checkEmail}</div>
                </div>
                <div className="checkEmail">
                    <button onClick= { onCheck }
                    >이메일 확인</button>
                </div>
            </div>
            
        <div className="password">
            <input 
                type = 'text' 
                value = {registerPassword} 
                placeholder='비밀번호를 입력해주세요'
                onChange={(e)=>setRegisterPassword(e.target.value)}
            ></input>
        </div>
        <div className="RePassword">
            <input 
                type = 'text' 
                value = {RePassword} 
                placeholder='비밀번호를 한 번 더 입력해주세요'
                onChange={(e)=>setRePassword(e.target.value)}
            >{register.setEmail}</input>
        </div>
        </div>
        <div className="two">
            <div className="name">
                <input 
                    type = 'text' 
                    value = {sName}
                    placeholder='이름을 입력해주세요.'
                    onChange={(e)=>setName(e.target.value) }
                    
                ></input>
            </div>
            <div className="part">
                <input 
                    type = 'text' 
                    value = {sPart}
                    placeholder='파트를 입력 해주세요.'
                    onChange={(e) => setPart(e.target.value)}
                ></input>
            </div>
        </div>
        <button 
            className="signup_button"
            onClick={ onSubmit }

        >회원가입</button>
        {errorMsg && <p className = 'error'> {errorMsg} </p>}
    </section>
    )  
}

export default Signup;