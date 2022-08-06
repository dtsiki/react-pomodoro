import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React, { useMemo, useState } from 'react';

import Countdown from './components/Countdown/Countdown';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const fields = [
    {
      name: 'hours',
      min: 0,
      max: 23,
    },
    {
      name: 'minutes',
      min: 0,
      max: 59,
    },
    {
      name: 'seconds',
      min: 0,
      max: 59,
    },
  ];

  const handleTime = (event) => {
    setTime((prevTime) => ({
      ...prevTime,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const value = `${time.hours}:${time.minutes}:${time.seconds}`;
    const total = moment.duration(value).asSeconds();

    setTargetDate(moment().add(total, 'second'));
  };

  const renderFiels = useMemo(() => {
    return fields.map((field) => {
      const { name, min, max } = field;

      return (
        <fieldset key={name} className="time-select">
          <label htmlFor={name} className="time-select__label">
            {name}
          </label>
          <input
            className="time-select__input"
            type="number"
            id={name}
            name={name}
            min={min}
            max={max}
            value={time[name]}
            onChange={handleTime}
          />
        </fieldset>
      );
    });
  }, [fields]);

  return (
    <div>
      {targetDate && <ProgressBar targetDate={targetDate} />}
      <div className="container">
        <div className="content">
          {targetDate && <Countdown targetDate={targetDate} />}
          <form className="time-form">
            {renderFiels}
            <div className="time-form__actions">
              <button onClick={onSubmit} className="time-form__button">
                <FontAwesomeIcon icon={faPlay} />
                <span className="visually-hidden">Start</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
