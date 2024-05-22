import './Attendance.css'
import { useState } from 'react';

const Attendance=()=>{
  const date = new Date();

    // 출석 여부를 저장하는 상태
    const [attendance, setAttendance] = useState({
     week1: false,
     week2: false,
     week3: false,
     week4: false,
     week5: false,
     week6: false,
     week7: false,
    });
  
    // 출석체크
    const checkAttendance = (week) => {
      setAttendance({ ...attendance, [week]: !attendance[week] });
    };
  
    return (
      <div className="Attendance">
        <h3>✨출석체크✨</h3>
        <div className='name'>000님</div>
            <div className='part'>part</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <p>출석 완료 되었습니다.</p>

        <div className="attendance-weeks">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
            <div
              key={`${week}주차`}
              className={`attendance-week ${attendance[`${week}주차`] ? 'checked' : ''}`}
              onClick={() => checkAttendance(`${week}주차`)}
            >
              {`${week}주차`}
            </div>
          ))}
        </div>
        <div className='attendanceMsg'>출석률 : n%</div>
        <button className="LogoutBtn">로그아웃</button>
      </div>
    );
  }
  

export default Attendance;
