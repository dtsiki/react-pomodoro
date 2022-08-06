import PropTypes from 'prop-types';
import React from 'react';

import { useCountdown } from '../../hooks/useCountdown';

import './style.scss';

const ProgressBar = ({ targetDate }) => {
  const [hours, minutes, seconds, progress] = useCountdown(targetDate);

  return (
    <div className="progress">
      <div className="progress__tracker" style={{ width: `${progress}%` }} />
    </div>
  );
};

ProgressBar.propTypes = {
  targetDate: PropTypes.object,
};

export default ProgressBar;
