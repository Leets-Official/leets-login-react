import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: rgb(196, 195, 195);
  width: 600px;
  font-size: 10px;
  color: black;
  padding: 20px 10px;
  border-radius: 25px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 30px;
  &::placeholder {
    color: black;
  }
`;

export const JoinInput = styled(StyledInput)`
  display: flex;
  width: 200px;
  justify-content: center;
  padding: 20px 15px;
`;

export const JoinDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 620px;
`;

// export const JoinButton = styled.button`
//   all: unset;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
