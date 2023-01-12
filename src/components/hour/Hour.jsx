import React from 'react';
import Minutes from '../minutes/Minutes';
// import Event from '../event/Event';

import './hour.scss';

export default function Hour({ hourForData, filteredByHourEvents, onUpdate }) {
  return (
    <div className="calendar__time-slot" data-hour={hourForData}>
      {[0, 15, 30, 45].map((minutesForData) => (
        <Minutes
          key={minutesForData}
          minutesForData={minutesForData}
          filteredByMinutesEvents={filteredByHourEvents.filter((event) => {
            const [, minutes] = event.start.time.split(':');
            return Number(minutes) === minutesForData;
          })}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
