import { styled } from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;

  background-color: rgb(54, 108, 126);
  width: 100%;
`;

export const StyledTitle = styled.h2`
  color: rgb(218, 220, 221);
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;
  padding: 0;
  margin: 0 auto;
`;
export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  padding: 12px;

  border: 1px solid black;
  background-color: #${() =>
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)};
`;
export const StyledLabel = styled.span`
  color: white;
`;
