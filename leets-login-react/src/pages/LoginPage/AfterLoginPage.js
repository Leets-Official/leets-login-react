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
        <h1>로그인 성공 후 화면</h1>
        {/* <div>{name}님</div>
        <div>{part}</div> */}
        <div>{new Date().toDateString()}</div>
        <StyledButton onClick={onClickToAttend}>출석하기</StyledButton>
      </div>
    </>
  );
};

export default AfterLoginPage;
