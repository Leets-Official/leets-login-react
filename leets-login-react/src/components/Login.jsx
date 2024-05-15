import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); 
    // 로그인 로직 구현
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const handleSignup = () => {
    window.location.replace('./components/Signup') ; 
  };

  return (
    <div className="login-container">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="아이디를 입력해주세요"
        className="login-input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력해주세요"
        className="login-input"
      />
      <button onClick={handleLogin}>로그인하기</button>
      <button onClick={handleSignup}>회원가입</button> 
    </div>
  );
};

export default Login;
