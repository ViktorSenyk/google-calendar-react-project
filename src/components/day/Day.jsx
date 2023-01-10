import React, { useState, useEffect } from 'react';
import Hour from '../hour/Hour';
import moment from 'moment';

import './day.scss';

export default function Day({ dateInfoInNumbers, events }) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      const [hours, minutes] = moment().format('H:m').split(':');
      setTop(Number(hours) * 60 + Number(minutes));
    }, 1000);
    // return clearInterval(intervalId)
  }, []);

  const hours = Array(24)
    .fill()
    .map((_, index) => index);
  return (
    <div className="calendar__day" data-day={`${dateInfoInNumbers}`}>
      {dateInfoInNumbers === moment().format('DD.MM.YYYY') ? (
        <div className="currentTimeLine" style={{ top: top + 'px' }}>
          <div className="currentTimeLine__circle" />
        </div>
      ) : null}
      {hours.map((hour) => (
        <Hour
          key={hour}
          dataHour={hour}
          events={events.filter((event) => event.start.time === hour)}
        />
      ))}
    </div>
  );
}
