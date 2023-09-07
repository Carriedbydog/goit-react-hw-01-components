import { styled } from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => props.$justify || 'stretch'};
  align-items: ${props => props.$align || 'stretch'};
  gap: ${props => props.$gap || '4px'};
  flex-wrap: ${props => props.$wrap || 'nowrap'};

  margin-top: 50px;
  margin-bottom: 100px;
  padding-top: 20px;

  width: 352px;
  height: 380px;

  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #000;
`;

export const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
`;
export const StyledText = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const StyledName = styled(StyledText)`
  font-weight: bold;
`;

export const StyledStats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  list-style: none;
  font-size: 20px;
  padding: 10px 20px;
  margin: 0;

  background-color: lightgrey;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;

  /* padding: 20px 20px; */
`;

export const StyledSpanLabel = styled.span`
  font-weight: bold;
`;
