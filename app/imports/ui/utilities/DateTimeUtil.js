export default class DateTime {
  static amPmToString = (timeStamp) => {
    const date = new Date(timeStamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };

  static dateToString = (timeStamp) => {
    const date = new Date(timeStamp);
    return date.toDateString();
  };

  static dateTimeToString = (timeStamp) => `${this.dateToString(timeStamp)} ${this.amPmToString(timeStamp)}`;

  static formattedNumber = (num, nDigits) => num.toLocaleString('en-US', {
    minimumIntegerDigits: nDigits,
    useGrouping: false,
  });

  static catDateString = (time) => `${this.formattedNumber(time.days, 3)}: ${this.formattedNumber(time.hours, 2)}: ${this.formattedNumber(time.minutes, 2)}: ${this.formattedNumber(time.seconds, 2)}`;

  static computeTimeLeft(stamp) {
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
  }

  static dateHasPassed(stamp) {
    const timeLeft = this.computeTimeLeft(stamp);
    if (timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds) {
      return false;
    }
    return true;
  }
}
