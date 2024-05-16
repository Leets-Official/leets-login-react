import './AttendanceSheet.css';
import { useState, useContext } from "react";
import { LoginContext } from '../App';
import { useNavigate } from 'react-router-dom';

const AttendanceSheet = () => {
    const { name, part, formattedDate } = useContext(LoginContext);
    const [todayAttendance, setTodayAttendance] = useState([
        true, true, true, true, true, false, false, false
    ]);

    const nav = useNavigate();

    const onClickButton = () => {
        nav("/login");
    }

    const attendanceRate = (todayAttendance.filter(attended => attended).length / todayAttendance.length) * 100;

    return (
        <div className='AttendanceSheet'>
            <h1>출석부</h1>
            <section>
                {name}님<br />
                {part}<br />
            </section>
            <section>
                {formattedDate}<br />
                출석 완료 되었습니다.<br />
            </section>
            <section>
                <div className="week">
                    <div className="weekcount">1주차</div>
                    <div className="weekcount">2주차</div>
                    <div className="weekcount">3주차</div>
                    <div className="weekcount">4주차</div>
                    <div className="weekcount">5주차</div>
                    <div className="weekcount">6주차</div>
                    <div className="weekcount">7주차</div>
                    <div className="weekcount">8주차</div>
                </div>
                <div className="container">
                    {todayAttendance.map((attended, index) => (
                        <div
                            key={index}
                            className={`square ${attended ? 'attended' : 'absent'}`}
                        ></div>
                    ))}
                </div>
                출석률 : {attendanceRate}%
            </section>
            <section>
                <button onClick={onClickButton}>로그아웃하기</button>
            </section>
        </div>
    );
};

export default AttendanceSheet;
