import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledLabel,
  StyledList,
  StyledSection,
  StyledTitle,
} from './Statistics.styled';

export const Statistics = ({ title = 'Default value', stats = [] }) => {
  return (
    <div>
      <StyledSection>
        {title && <StyledTitle>Upload stats</StyledTitle>}
        <StyledList>
          {stats.map(stat => (
            <StyledItem key={stat.id}>
              <StyledLabel>{stat.label}</StyledLabel>
              <StyledLabel>{stat.percentage}</StyledLabel>
            </StyledItem>
          ))}
        </StyledList>
      </StyledSection>
    </div>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
