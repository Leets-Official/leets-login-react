import './Attendance.css'
import { useContext } from 'react';
import { LoginContext } from '../App'
import { useNavigate } from 'react-router-dom';

const Attendance= () => {

    let {name, part, formattedDate, todayAttendance} = useContext(LoginContext);
    const nav = useNavigate();

    const onClickButton=() =>{
        todayAttendance = true;
        nav("/attendancesheet", { todayAttendance });
    }

    return (
    <div className='Attendance'>
        <h1>로그인 성공</h1>
        <section>
        {name}님<br/>
        {part}<br/>
        </section>
        
        <section>
        {formattedDate}<br/>
        출석하시겠습니까?
        </section>

        <section>
            <button onClick={onClickButton}>출석하기</button>
        </section>
    </div>
    );
};

export default Attendance;