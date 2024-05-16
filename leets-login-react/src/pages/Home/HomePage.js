import { useNavigate } from "react-router-dom";
import "./Home.css";
import { StyledButton } from "../../components/Button";
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
      <h1>Home Page</h1>
      <div className="home">
        <StyledButton onClick={onClickButton}>로그인</StyledButton>
        <StyledButton onClick={onClickToJoin}>회원가입</StyledButton>
      </div>
    </>
  );
};

export default HomePage;
