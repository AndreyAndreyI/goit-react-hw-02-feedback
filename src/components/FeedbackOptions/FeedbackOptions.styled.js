import styled from "styled-components";

export const FeedbackButton = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  font-size: 22px;
  padding: 0;
  margin: 0;
  border-radius: 50px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #caa880;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;