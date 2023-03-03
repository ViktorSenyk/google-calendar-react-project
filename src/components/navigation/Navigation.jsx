import React from 'react';
import moment from 'moment';
import './navigation.scss';

export default function Navigation({ currentWeekInfo }) {
  return (
    <header className="calendar__header">
      {currentWeekInfo.map(dayDate => {
        const [dateInfoInNumbers, dayName] = dayDate.split(' ');
        const [dayNumber] = dateInfoInNumbers.split('.');
        return (
          <div className="calendar__day-label day-label" key={dayNumber}>
            <span className="day-label__day-name">{dayName}</span>
            <span
              data-day={dateInfoInNumbers}
              className={`day-label__day-number ${
                dateInfoInNumbers === moment().format('DD.MM.YYYY')
                  ? 'day-label__day-number_current'
                  : ''
              }`}
            >
              {Number(dayNumber)}
            </span>
          </div>
        );
      })}
    </header>
  );
}
