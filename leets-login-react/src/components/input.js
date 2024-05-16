import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: rgb(196, 195, 195);
  font-size: 10px;
  color: black;
  padding: 20px 100px;
  border-radius: 25px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  &::placeholder {
    color: black;
  }
`;

export const JoinInput = styled(StyledInput)`
  display: flex;
  justify-content: center;
  padding: 20px 15px;
  margin-left: 30px;
`;

export const JoinDiv = styled.div`
  display: flex;
  justify-content: center;
`;
