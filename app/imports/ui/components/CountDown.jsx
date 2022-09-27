import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DateTime from '../utilities/DateTimeUtil';

const CountDown = props => {
  const { dateTimeStr } = props;

  const calculateTimeLeft = (stamp) => {
    const difference = +new Date(stamp) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        ms: Math.floor((difference % (1000))),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(dateTimeStr));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dateTimeStr));
    }, 1000);
  });

  return (
    <div>
      {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>Day: Hr: Mi: Se <p>{DateTime.catDateString(timeLeft)} </p></p>
      ) : (
        <p>Time is up 🔥</p>
      )}
    </div>
  );
};
CountDown.propTypes = {
  dateTimeStr: PropTypes.string.isRequired,
};
export default CountDown;
