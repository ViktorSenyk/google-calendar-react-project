import React from 'react';
import { onDeleteTask } from '../../gateway/tasksGateway';

import './event.scss';

export default function Event({
  height,
  title,
  description,
  time,
  id,
  onUpdate,
  setInfoFromClickedEvent,
  setModalWindowBoolean,
}) {
  const eventStyle = {
    height: height + 'px',
  };

  const onDelete = (e) => {
    e.stopPropagation();
    onDeleteTask(e.target.closest('.event').dataset.id).then(() => onUpdate());
  };

  return (
    <div
      style={eventStyle}
      className="event event_relative"
      data-id={id}
      onClick={() => {
        setInfoFromClickedEvent({
          title: title,
          description: description,
          time: time,
        });
        setModalWindowBoolean(true);
      }}
    >
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
