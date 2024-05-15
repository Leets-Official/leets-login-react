import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import "./Signup.css";

function Signup() {
  const [name, setName] = useState('');
  const [part, setPart] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  //const history = useNavigate();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
    } else {
      alert('회원가입이 완료되었습니다.');
      // 회원가입 후 로그인 페이지로 이동하는 코드 추가
      //history.push(`/Login?name=${encodeURIComponent(name)}&part=${encodeURIComponent(part)}`);
    }
  };

  return (
    <div className="Signup">
      
      
      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="confirm-button">아이디 확인</button>
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호를 한 번 더 입력해주세요"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="name-part-container">
        <div className="name-input">
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="part-input">
          <input
            type="text"
            placeholder="파트를 입력해주세요"
            value={part}
            onChange={(e) => setPart(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleSignup}>회원가입</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;
