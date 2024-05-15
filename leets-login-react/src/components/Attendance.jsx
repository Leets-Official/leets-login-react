import React from 'react';
//import { useNavigate } from 'react-router-dom';
import "./Attendance.css";

function Attendance({ name, part }) {
  const currentDate = new Date().toLocaleDateString(); 

  const handleLogout = () => {
    // 로그아웃 처리 로직을 작성합
    // 로그아웃 버튼을 클릭하면 로그인 페이지로 이동
  };

  return (
    <div className="Attendance">
      <h2>출석  </h2>
      <div className="info">
        <p>이름: {name}</p>
        <p>파트: {part}</p>
        <p>{currentDate}</p>
      </div>
      <p>출석 완료 되었습니다.</p>
      <button onClick={handleLogout}>로그아웃하기</button>
    </div>
  );
}

export default Attendance;
