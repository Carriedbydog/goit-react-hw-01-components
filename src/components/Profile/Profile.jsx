import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAvatar,
  StyledCardInfo,
  StyledItem,
  StyledName,
  StyledSpanLabel,
  StyledStats,
  StyledText,
  StyledWrapper,
} from './Profile.styled';

export const ProfileCard = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <StyledWrapper $wrap="wrap" $justify="center">
        <StyledCardInfo>
          <StyledAvatar src={avatar} alt="User avatar" />
          <StyledName>{username}</StyledName>
          <StyledText>@{tag}</StyledText>
          <StyledText>{location}</StyledText>
        </StyledCardInfo>

        <StyledStats>
          <StyledItem>
            <StyledSpanLabel>Followers</StyledSpanLabel>
            <span>{stats.followers}</span>
          </StyledItem>
          <StyledItem>
            <StyledSpanLabel>Views</StyledSpanLabel>
            <span>{stats.views}</span>
          </StyledItem>
          <StyledItem>
            <StyledSpanLabel>Likes</StyledSpanLabel>
            <span>{stats.likes}</span>
          </StyledItem>
        </StyledStats>
      </StyledWrapper>
    </div>
  );
};

ProfileCard.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
