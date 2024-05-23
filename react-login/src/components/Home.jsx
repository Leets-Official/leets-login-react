import './Home.css'
import { useContext } from 'react';
import { UserContext} from '../App';
import { useNavigate } from 'react-router-dom'

const Home =()=>{
    const {name, part} = useContext(UserContext);
    const navigate = useNavigate();

    const date = new Date();
    return (
        <div className="Home">

            <h3>✨로그인 성공✨</h3>

            <div className='name'>{name}</div>
            <div className='part'>{part}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <p>출석 하시겠습니까?</p>
            <button onClick={() => navigate('/attendance')}>출석하기</button>

        </div>
    )
}

export default Home;