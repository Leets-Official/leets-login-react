import './Home.css'
import { useNavigate } from "react-router-dom";

const Home= () => {
    
    const nav = useNavigate();

    const onClickButtonSignin= () => {
        nav("/Signin");
    }
    const onClickButtonLogin= () => {
        nav("/Login");
    }

    
    return (
    <div className = "Home">
        <button onClick={onClickButtonSignin}>
            회원가입
        </button>
        <button onClick={onClickButtonLogin}>
            로그인
        </button>
    </div>
    );
}

export default Home;