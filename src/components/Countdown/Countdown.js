import PropTypes from 'prop-types';
import React from 'react';

import { useCountdown } from '../../hooks/useCountdown';

import './style.scss';

const Countdown = ({ targetDate }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  const formatValue = (item) => {
    return item.toString().length === 1 ? `0${item}` : item;
  };

  return (
    <div className="countdown">
      <div className="countdown__value">{formatValue(hours)}</div>
      <div className="countdown__value">{formatValue(minutes)}</div>
      <div className="countdown__value">{formatValue(seconds)}</div>
    </div>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.object,
};

export default Countdown;
