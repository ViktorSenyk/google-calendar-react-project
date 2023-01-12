import React from 'react';
import Event from '../event/Event';

import './minutes.scss';

export default function Minutes({
  minutesForData,
  filteredByMinutesEvents,
  onUpdate,
}) {
  return (
    <div className="minutes" data-minutes={minutesForData}>
      {filteredByMinutesEvents.map((event) => {
        const [startHours, startMinutes] = event.start.time.split(':');
        const [endHours, endMinutes] = event.end.time.split(':');
        // ======================================= heightForEvent = number(height for event)
        const heightForEvent =
          (Number(endHours) - Number(startHours)) * 60 +
          (Number(endMinutes) - Number(startMinutes));
        return (
          <Event
            key={event.id}
            id={event.id}
            height={heightForEvent}
            title={event.title}
            time={`${event.start.time} - ${event.end.time}`}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}
