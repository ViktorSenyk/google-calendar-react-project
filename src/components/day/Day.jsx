import React from 'react';
import Hour from '../hour/Hour';

import './day.scss';

export default function Day({ dateInfoInNumbers, events }) {
  const hours = Array(24)
    .fill()
    .map((_, index) => index);
  return (
    <div className="calendar__day" data-day={`${dateInfoInNumbers}`}>
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
