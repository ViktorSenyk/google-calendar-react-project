import React, { useState, useEffect } from 'react';
import Hour from '../hour/Hour';
import moment from 'moment';

import './day.scss';

export default function Day({
  dateInfoInNumbers,
  filteredByDayEvents,
  onUpdate,
  setInfoFromClickedEvent,
  setModalWindowBoolean,
}) {
  // ======================================= topMarginForLine & setTopMarginForLine = settings for 'red line' (line for current time)
  const [currentHoursForStartPosition, currentMinutesForStartPosition] =
    moment().format('H:m').split(':');
  const [topMarginForLine, setTopMarginForLine] = useState(
    Number(currentHoursForStartPosition) * 60 +
      Number(currentMinutesForStartPosition)
  );
  // ======================================= interval for 'red line' (watch current time & regular update)
  useEffect(() => {
    setInterval(() => {
      const [hours, minutes] = moment().format('H:m').split(':');
      setTopMarginForLine(Number(hours) * 60 + Number(minutes));
    }, 60000);
  }, []);
  // ======================================= hours = [0, 1, 2, ...] (array for hours render)
  const hours = Array(24)
    .fill()
    .map((_, index) => index);

  return (
    <div className="calendar__day" data-day={`${dateInfoInNumbers}`}>
      {dateInfoInNumbers === moment().format('DD.MM.YYYY') ? (
        <div
          className="currentTimeLine"
          style={{ top: topMarginForLine + 'px' }}
        >
          <div className="currentTimeLine__circle" />
        </div>
      ) : null}
      {hours.map((hour) => (
        <Hour
          key={hour}
          hourForData={hour}
          filteredByHourEvents={filteredByDayEvents.filter((event) => {
            const [startHour] = event.start.time.split(':');
            return Number(startHour) === hour;
          })}
          onUpdate={onUpdate}
          setInfoFromClickedEvent={setInfoFromClickedEvent}
          setModalWindowBoolean={setModalWindowBoolean}
        />
      ))}
    </div>
  );
}
