import { useNavigate } from "react-router-dom";
import { StyledButton } from "../../components/Button";

const AfterLoginPage = () => {
  const nav = useNavigate();
  const onClickToAttend = () => {
    nav("/Attend");
  };

  return (
    <>
      <div>
        <h1>로그인 성공 후</h1>
        <div></div>
        <div></div>
        <div>{new Date().toDateString()}</div>
        <div>출석하시겠습니까?</div>
        <StyledButton onClick={onClickToAttend}>출석하기</StyledButton>
      </div>
    </>
  );
};

export default AfterLoginPage;
