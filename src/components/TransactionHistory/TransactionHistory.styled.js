import { styled } from 'styled-components';

export const StyledTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  margin-bottom: 100px;
`;

export const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 20px 70px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;
export const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 20px 50px;
  font-weight: 100;
  color: gray;
`;
export const StyledTr = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;
