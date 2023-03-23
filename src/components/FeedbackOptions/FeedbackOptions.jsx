import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton, ButtonBlock } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonBlock>
    {options.map(option => (
      <FeedbackButton key={option} name={option} onClick={onLeaveFeedback}>
        {option[0].toUpperCase() + option.slice(1)}
      </FeedbackButton>
    ))}
  </ButtonBlock>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};