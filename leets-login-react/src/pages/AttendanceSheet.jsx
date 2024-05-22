import './AttendanceSheet.css';
import { useContext } from "react";
import { LoginContext } from '../App';
import { useNavigate } from 'react-router-dom';

const AttendanceSheet = () => {
    const { name, part, formattedDate } = useContext(LoginContext);
    let attendance = [false, false, false, false, false, false, false, false];
    
    // 1주차: 4/1~4/7
    // 2주차: 4/8~4/14
    // 3주차: 4/15~4/21
    // 4주차: 5/6~5/12
    // 5주차: 5/13~5/19
    // 6주차: 5/20~5/26
    // 7주차: 5/27~6/2
    // 8주차: 6/3~6/9

    const todayMonth = new Date().getMonth()+1;
    const todayDay = new Date().getDate();

    if(todayMonth === 4) {
        if(todayDay >= 1 && todayDay <= 7) attendance[1] = true;
        else if(todayDay >= 8 && todayDay <= 14) attendance[2] = true;
        else if(todayDay >= 15 && todayDay <= 21) attendance[3] = true;
    }
    else if(todayMonth === 5) {
        if(todayDay >= 6 && todayDay <= 12) attendance[4] = true;
        else if(todayDay >= 13 && todayDay <= 19) attendance[5] = true;
        else if(todayDay >= 20 && todayDay <= 26) attendance[6] = true;
        else if(todayDay >= 27 && todayDay <= 31) attendance[7] = true;
    }
    else if(todayMonth === 6) {
        if(todayDay >= 1 && todayDay <= 2) attendance[7] = true;
        else if(todayDay >= 3 && todayDay <= 9) attendance[8] = true;
    }

    const nav = useNavigate();

    const onClickButton = () => {
        nav("/login");
    }

    const attendanceRate = (attendance.reduce((sum, current) => sum + (current ? 1 : 0), 0))/attendance.length*100;

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
                    <div className={`square square_${attendance[1]}`}></div>
                    <div className={`square square_${attendance[2]}`}></div>
                    <div className={`square square_${attendance[3]}`}></div>
                    <div className={`square square_${attendance[4]}`}></div>
                    <div className={`square square_${attendance[5]}`}></div>
                    <div className={`square square_${attendance[6]}`}></div>
                    <div className={`square square_${attendance[7]}`}></div>
                    <div className={`square square_${attendance[8]}`}></div>
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
