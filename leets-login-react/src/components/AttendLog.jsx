import React from 'react';
import "./AttendLog.css";

function AttendLog({ name, part }) {
  const currentDate = new Date().toLocaleDateString();

  const handleAttendance = () => {
    // 출석 처리 로직
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
      <button onClick={handleAttendance}>출석하기</button>
    </div>
  );
}

export default AttendLog;
