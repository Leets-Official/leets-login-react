import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../components/Button";
import { StyledInput } from "../../components/input";
import { useState } from "react";
import styled from "styled-components";
const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const onClickLoginButton = () => {
    nav("/afterLogin");
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <h1>로그인 화면</h1>
      <form onSubmit={onSubmitLogin}>
        <div>
          <StyledInput
            name="id"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={(e) => setId(e.target.value)}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <StyledButton onClick={onClickLoginButton}>로그인하기</StyledButton>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginPage;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
