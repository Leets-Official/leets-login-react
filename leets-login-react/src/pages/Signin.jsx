
import "./Signin.css"
import { useState, useContext } from "react";
import { LoginContext } from '../App'
import { useNavigate } from "react-router-dom";

const Signin= () => {

    const {onCreateId} = useContext(LoginContext);

    const [id,setId] = useState("");
    const [password,setPassword] = useState("");
    const nav = useNavigate();

    const onClickButton= () => {
        nav("/login");
    }

    const onKeydown = (e) =>{
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const onChangeId= (e) => {
        setId(e.target.value);
    }

    const onChangePassword= (e) => {
        setPassword(e.target.value);
        if(e.keyCode === 13) {
            onCreateId(password);
        }
    }

    const onSubmit= () =>{
        onCreateId(id);
    }

    return (
        <div className="Signin">
            <h1>회원가입</h1>
            <input
                value = {id}
                onChange={onChangeId}
                onKeyDown={onKeydown}
                placeholder={"이메일을 입력해주세요"}
            />
            <button
            className="idButton"
            onClick={onSubmit}
            >
            이메일 확인
            </button>

            <input
            value = {password}
            onChange={onChangePassword}
            onKeyDown={onKeydown}
            placeholder={"비밀번호를 입력해주세요"}
            />
            <input
            placeholder={"비밀번호를 한 번 더 입력해주세요"}
            />
       
            <div className="namepart">
            <input
                placeholder={"이름을 입력해주세요"}/>
            <input
                placeholder={"파트를 입력해주세요"}/>
            </div>
            
            <button onClick={onClickButton}>회원가입</button>
            
        </div>
    );
};

export default Signin;