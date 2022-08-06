import { useEffect, useState } from 'react';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
  const [initialCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newCountDown = countDownDate - new Date().getTime();

      if (newCountDown > 0) {
        setCountDown(newCountDown);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(initialCountDown, countDown);
};

const getReturnValues = (initialCountDown, countDown) => {
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  const progress = 100 - Math.floor((countDown * 100) / initialCountDown);

  return [hours, minutes, seconds, progress];
};

export { useCountdown };
