import React from 'react';
import CurrentTimeLine from '../currentTimeLine/CurrentTimeLine';
import Hour from '../hour/Hour';
import moment from 'moment';

import './day.scss';

export default function Day({
  dateInfoInNumbers,
  filteredByDayEvents,
  onUpdate,
  setInfoFromClickedEvent,
  setIsModalWindowActive,
}) {
  const hours = Array(24)
    .fill()
    .map((_, index) => index);

  return (
    <div className="calendar__day" data-day={`${dateInfoInNumbers}`}>
      {dateInfoInNumbers === moment().format('DD.MM.YYYY') ? <CurrentTimeLine /> : null}
      {hours.map(hour => (
        <Hour
          key={hour}
          hourForData={hour}
          filteredByHourEvents={filteredByDayEvents.filter(event => {
            const [startHour] = event.start.time.split(':');
            return Number(startHour) === hour;
          })}
          onUpdate={onUpdate}
          setInfoFromClickedEvent={setInfoFromClickedEvent}
          setIsModalWindowActive={setIsModalWindowActive}
        />
      ))}
    </div>
  );
}
