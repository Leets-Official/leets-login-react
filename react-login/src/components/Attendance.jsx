import './Attendance.css'
import { useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom'

const Attendance=()=>{

  const { name, part } = useContext(UserContext);
  const navigate = useNavigate();

  const getCurrentWeek = (date) => {
    // 날짜 정리
    const weekRanges = [
      { start: new Date('2024-04-04'), end: new Date('2024-04-10') },
      { start: new Date('2024-04-11'), end: new Date('2024-04-17') },
      { start: new Date('2024-04-18'), end: new Date('2024-04-24') },
      { start: new Date('2024-04-25'), end: new Date('2024-05-01') },
      { start: new Date('2024-05-02'), end: new Date('2024-05-08') },
      { start: new Date('2024-05-09'), end: new Date('2024-05-15') },
      { start: new Date('2024-05-16'), end: new Date('2024-05-22') },
      { start: new Date('2024-05-23'), end: new Date('2024-05-29') }
    ];

    // 현재날짜가 속한 주차 찾기
    for (let i = 0; i < weekRanges.length; i++) {
      const { start, end } = weekRanges[i];
      if (date >= start && date <= end) {
        console.log(i+1);
        return i + 1; 
      }
    }

    return null; 
  };


    const currentDate = new Date();
    const currentWeek = getCurrentWeek(currentDate); 
    console.log(currentWeek);

  
    
  return (
    <div className="Attendance">
      <h3>✨출석체크✨</h3>
      <div className='name'>{name}</div>
      <div className='part'>{part}</div>
      <div className='date'>{currentDate.toLocaleDateString()}</div>
      <p>출석 완료 되었습니다.</p>

      <div className="attendance-weeks">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((weekNumber) => (
          <div
            key={`week-${weekNumber}`}
            className={`attendance-week ${weekNumber === currentWeek ? 'current-week' : ''} `}
          >
            {`${weekNumber}주차`}
          </div>
        ))}
      </div>
      <button className="LogoutBtn" onClick={() => navigate('/')}>로그아웃</button>
    </div>
  );
}

export default Attendance;
