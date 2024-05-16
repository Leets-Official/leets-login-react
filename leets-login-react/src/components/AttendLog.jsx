import React from 'react';
import { Link } from 'react-router-dom'; 
import "./AttendLog.css";

function AttendLog({ name, part }) {
  const currentDate = new Date().toLocaleDateString();

  const handleAttendance = () => {
    alert('출석되었습니다.');
  };

  return (
    <div className="AttendLog">
      <h2>출석 확인</h2>
      <div className="info">
        <p>이름: {name}</p>
        <p>파트: {part}</p>
      </div>
      <p> {currentDate}</p>
      <p>출석하시겠습니까?</p>
      <Link to="/attendance" className="button-link" onClick={handleAttendance}>출석하기</Link>
    </div>
  );
}

export default AttendLog;
