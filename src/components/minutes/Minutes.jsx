import React from 'react';
import Event from '../event/Event';

import './minutes.scss';

export default function Minutes({
  minutesForData,
  filteredByMinutesEvents,
  onUpdate,
  setInfoFromClickedEvent,
  setModalWindowBoolean,
}) {
  return (
    <div className="minutes" data-minutes={minutesForData}>
      {filteredByMinutesEvents.map((event) => {
        const [startHours, startMinutes] = event.start.time.split(':');
        const [endHours, endMinutes] = event.end.time.split(':');
        const heightForEvent =
          (Number(endHours) - Number(startHours)) * 60 +
          (Number(endMinutes) - Number(startMinutes));
        return (
          <Event
            key={event.id}
            id={event.id}
            height={heightForEvent}
            title={event.title}
            description={event.description}
            time={`${event.start.time} - ${event.end.time}`}
            onUpdate={onUpdate}
            setInfoFromClickedEvent={setInfoFromClickedEvent}
            setModalWindowBoolean={setModalWindowBoolean}
          />
        );
      })}
    </div>
  );
}
