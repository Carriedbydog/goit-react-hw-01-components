import { styled } from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => props.$justify || 'stretch'};
  align-items: ${props => props.$align || 'stretch'};
  gap: ${props => props.$gap || '4px'};
  margin-bottom: 20px;
  width: 400px;

  border-radius: 20px;
  background-color: lightgray;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 100px;
`;

export const StyledSpan = styled.span`
  color: black;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;

  margin-left: 10px;
`;

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
