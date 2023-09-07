import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledFlex,
  StyledImg,
  StyledList,
  StyledSpan,
} from './FriendList.styled';

export const FriendList = ({ friends = [] }) => {
  return (
    <div>
      <StyledList>
        {friends.map(friend => (
          <StyledFlex $align="center" $gap="50px" key={friend.id}>
            <StyledSpan isOnline={friend.isOnline}></StyledSpan>
            <StyledImg src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </StyledFlex>
        ))}
      </StyledList>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
