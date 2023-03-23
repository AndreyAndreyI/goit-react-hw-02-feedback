import React from 'react';
import PropTypes from 'prop-types';
import { Position, PositionBlock, MassegeText } from './Statistics.slyled';

export const Statistics = props => {
  const { good, neutral, bad, positivePercentage, total } = props;

  if (total === 0) {
    return <MassegeText>No feedback given</MassegeText>;
  }

  return (
    <PositionBlock>
      <Position>Good: {good}</Position>
      <Position>Neutral: {neutral}</Position>
      <Position>Bad: {bad}</Position>
      <Position>Total: {total}</Position>
      <Position>Positive feedback: {positivePercentage}%</Position>
    </PositionBlock>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export const Massage = () => {
  return <MassegeText>No feedback given</MassegeText>;
};