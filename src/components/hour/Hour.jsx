import React from 'react';
import Event from '../event/Event';

import './hour.scss';

export default function Hour({
  hourForData,
  filteredByHourEvents,
  onUpdate,
  setInfoFromClickedEvent,
  setIsModalWindowActive,
}) {
  return (
    <div className="calendar__time-slot" data-hour={hourForData}>
      {[0, 15, 30, 45].map(minutesForData => (
        <div className="minutes" data-minutes={minutesForData} key={minutesForData}>
          {filteredByHourEvents
            .filter(event => {
              const [, minutes] = event.start.time.split(':');
              return Number(minutes) === minutesForData;
            })
            .map(event => {
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
                  setIsModalWindowActive={setIsModalWindowActive}
                />
              );
            })}
        </div>
      ))}
    </div>
  );
}
