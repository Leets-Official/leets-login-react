import "./Login.css"
import { useNavigate } from "react-router-dom";

const Login= () => {

    const nav = useNavigate();
    
    const onClickButton= () =>{
        nav("/attendance");
    }

    return (
        <div className="Login">
        <h1>로그인</h1>
        <input
            placeholder={"아이디를 입력해주세요"}/>
        <input
            type="password"
            placeholder={"비밀번호를 입력해주세요"}/>
        <button onClick={onClickButton}>로그인</button>
        </div>
    );
};

export default Login;