import React from 'react';
import Day from '../day/Day';

import './week.scss';

export default function Week({ currentWeekInfo, events, onUpdate }) {
  // ======================================= currentWeekInfo = ['DD.MM.YYYY dddd', 'DD.MM.YYYY dddd' ... + 5]
  return currentWeekInfo.map((day) => {
    // ======================================= dateInfoInNumbers = 'DD.MM.YYYY' ('10.01.2023')
    const [dateInfoInNumbers] = day.split(' ');
    // ======================================= render: Day
    return (
      <Day
        key={dateInfoInNumbers}
        dateInfoInNumbers={dateInfoInNumbers}
        filteredByDayEvents={events.filter(
          (event) => event.start.day === dateInfoInNumbers
        )}
        onUpdate={onUpdate}
      />
    );
  });
}
