import styled from '@emotion/styled';

export const Form = styled.form`
  background: #fafafa;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 400px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0px 3px 15px -12px #000000;

  h2 {
    font-size: 30px;
  }

  input {
    padding: 10px;
    box-shadow: 0px 3px 15px -12px #000000;
    flex-grow: 1;
    width: 250px;
  }

  button {
    background-color: black;
    color: white;
    width: 100px;
    padding: 10px;
    border-radius: 4px;

    :disabled {
      background-color: #aaa;
    }
  }
`;

export const Router = styled.span`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const SpanIcon = styled.span`
  position: relative;
  right: 30px;
`;
