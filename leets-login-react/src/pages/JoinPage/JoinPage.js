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

  const onClickJoinButton = () => {
    nav("/login");
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <h1>회원가입 화면</h1>
        <JoinDiv onChange={onChangeInput}>
          <form onSubmit={onSubmitJoin}>
            <StyledInput
              name="id"
              type="text"
              value={userInfo.id}
              placeholder="아이디를 입력해주세요"
            />
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
            {userInfo.password === userInfo.passwordConfirm ? (
              <PStyle>비밀번호가 확인되었습니다!</PStyle>
            ) : null}
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
        <JoinDiv>
          <StyledButton onClick={onClickJoinButton}>회원가입</StyledButton>
        </JoinDiv>
      </div>
    </>
  );
};

export default JoinPage;

const PStyle = styled.p`
  font-size: small;
  color: blue;
`;
