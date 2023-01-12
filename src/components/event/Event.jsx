import React from 'react';
import { onDeleteTask } from '../../gateway/tasksGateway';

import './event.scss';

export default function Event({ height, title, time, id, onUpdate }) {
  const eventStyle = {
    height: height + 'px',
  };

  const onDelete = (e) => {
    onDeleteTask(e.target.closest('.event').dataset.id).then(() => onUpdate());
  };

  return (
    <div style={eventStyle} className="event" data-id={id}>
      <div className="event__title">{title}</div>
      <div className="event__time">
        {time}
        <button className="event__deleteButton" onClick={(e) => onDelete(e)}>
          x
        </button>
      </div>
    </div>
  );
}
