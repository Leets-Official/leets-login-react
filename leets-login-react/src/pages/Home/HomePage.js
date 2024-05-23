import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../components/Button";
import styled from "styled-components";
const HomePage = () => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/login");
  };

  const onClickToJoin = () => {
    nav("/Join");
  };
  return (
    <>
      <H1>Home Page</H1>
      <HomeDiv>
        <StyledButton onClick={onClickButton}>로그인</StyledButton>
        <StyledButton onClick={onClickToJoin}>회원가입</StyledButton>
      </HomeDiv>
    </>
  );
};

export default HomePage;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
`;
