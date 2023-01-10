import React from 'react';
import Day from '../day/Day';
import events from '../../gateway/events';

import './week.scss';

export default function Week({ currentWeekInfo }) {
  return currentWeekInfo.map((day) => {
    const [dateInfoInNumbers] = day.split(' ');
    
    return (
      <Day
        key={dateInfoInNumbers}
        dateInfoInNumbers={dateInfoInNumbers}
        events={events.filter((event) => event.start.day === dateInfoInNumbers)}
      />
    );
  });
}
