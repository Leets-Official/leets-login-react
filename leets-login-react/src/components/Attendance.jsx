import React from 'react';
import { Link } from 'react-router-dom';
import "./Attendance.css";

function Attendance({ name, part }) {
  const currentDate = new Date().toLocaleDateString(); 

  const handleLogout = () => {
    window.location.href = '/'; 
  };

  return (
    <div className="Attendance">
      <h2>출석</h2>
      <div className="info">
        <p>이름: {name}</p>
        <p>파트: {part}</p>
        <p>{currentDate}</p>
      </div>
      <p>출석 완료 되었습니다.</p>
      <Link to="/" className="button-link" onClick={handleLogout} style={{ width: '120px' }}>로그아웃하기</Link>

    </div>
  );
}

export default Attendance;
