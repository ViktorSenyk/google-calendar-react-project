import React from 'react';

import './sidebar.scss';

export default function Sidebar() {
  const hours = Array(24)
    .fill()
    .map((_, index) => index);

  return (
    <div className="calendar__time-scale">
      {hours.map(hour => (
        <div className="time-slot" data-hour={hour} key={hour}>
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      ))}
    </div>
  );
}
