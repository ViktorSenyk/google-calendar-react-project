import React from 'react';
import Event from '../event/Event';

import './hour.scss';

export default function Hour({ dataHour, events }) {
  return (
    <div className="calendar__time-slot" data-hour={dataHour}>
      {events.map((event) =>
        event.start.time === dataHour ? (
          <Event
            key={event.id}
            height={(event.end.time - event.start.time) * 60}
            title={event.title}
            time={`${event.start.time}:00 - ${event.end.time}:00`}
          />
        ) : null
      )}
    </div>
  );
}
