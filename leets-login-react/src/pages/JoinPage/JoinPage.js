import styled from "styled-components";
import { StyledButton } from "../../components/Button";
import {
  JoinButton,
  JoinDiv,
  JoinInput,
  StyledInput,
} from "../../components/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { firebaseAuth, createUserWithEmailAndPassword } from "../../firebase";
const JoinPage = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    name: "",
    part: "",
  });

  const nav = useNavigate();
  const onSubmitJoin = (e) => {
    e.preventDefault();
  };

  const onClickJoinButton = async () => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        userInfo.id,
        userInfo.password
      );
      console.log(createdUser);
      nav("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  const isValid =
    userInfo.password.length !== 0 &&
    userInfo.passwordConfirm.length !== 0 &&
    userInfo.password === userInfo.passwordConfirm;

  return (
    <>
      <FormContainer>
        <H1>회원가입 화면</H1>
        <JoinDiv onChange={onChangeInput}>
          <form onSubmit={onSubmitJoin}>
            <JoinDiv>
              <StyledInput
                name="id"
                type="text"
                value={userInfo.id}
                placeholder="아이디를 입력해주세요"
              />
              <StyledButton>아이디 확인</StyledButton>
            </JoinDiv>
            <StyledInput
              name="password"
              type="password"
              value={userInfo.password}
              placeholder="비밀번호를 입력해주세요"
            />
            <StyledInput
              name="passwordConfirm"
              type="password"
              value={userInfo.passwordConfirm}
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <PStyle isValid={isValid}>
              {isValid
                ? "비밀번호가 확인되었습니다!"
                : "비밀번호가 일치하지 않습니다!"}
            </PStyle>
          </form>
        </JoinDiv>
        <JoinDiv onChange={onChangeInput}>
          <JoinInput
            name="name"
            type="text"
            value={userInfo.name}
            placeholder="이름을 입력해주세요"
          />
          <JoinInput
            name="part"
            type="text"
            value={userInfo.part}
            placeholder="파트를 입력해주세요"
          />
        </JoinDiv>
        <StyledButton onClick={onClickJoinButton}>회원가입</StyledButton>
      </FormContainer>
    </>
  );
};

export default JoinPage;

const PStyle = styled.p`
  font-size: small;
  color: ${(props) => (props.isValid ? "blue" : "red")};
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
