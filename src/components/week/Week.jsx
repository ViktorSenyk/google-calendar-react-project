import React from 'react';
import Day from '../day/Day';

import './week.scss';

export default function Week({ currentWeekInfo, events, onUpdate }) {
  return currentWeekInfo.map((day) => {
    const [dateInfoInNumbers] = day.split(' ');
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
