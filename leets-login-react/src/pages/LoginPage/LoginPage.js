import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../components/Button";
import { StyledInput } from "../../components/input";
import { useState } from "react";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase";

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  const onClickLoginButton = async () => {
    try {
      const currentUserInfo = await signInWithEmailAndPassword(
        firebaseAuth,
        userInfo.id,
        userInfo.password
      );
      console.log(currentUserInfo);
      nav("/afterLogin");
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/user-not-found") {
        setErrorMessage("존재하지 않는 아이디입니다!");
        console.log(setErrorMessage);
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("비밀번호가 일치하지 않습니다!");
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const onSubmitLogin = async (e) => {
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
            onChange={onChange}
          />
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

          <StyledInput
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChange}
          />
          <StyledButton onClick={onClickLoginButton}>로그인하기</StyledButton>
        </div>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </form>
    </FormContainer>
  );
};

export default LoginPage;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const ErrorText = styled.p`
  color: red;
  font-size: small;
  margin-top: 10px;
`;
