import React, { useState } from 'react';
import { onCreateTask } from '../../gateway/tasksGateway';

import './modal.scss';

export default function Modal({
  setOnOffBoolean,
  clickInfo,
  infoFromClickedEvent,
  onUpdate,
}) {
  const [title, setTitle] = useState(
    infoFromClickedEvent ? infoFromClickedEvent.title : ''
  );
  const [description, setDescription] = useState(
    infoFromClickedEvent ? infoFromClickedEvent.description : ''
  );
  const [startDate, setStartDate] = useState(clickInfo.day);
  const [startTime, setStartTime] = useState(
    `${clickInfo.hour}:${clickInfo.minutes}`
  );
  const [endTime, setEndTime] = useState('23:45');

  const onCreate = (e) => {
    e.preventDefault();
    const [year, month, day] = startDate.split('-');
    onCreateTask({
      title: title ? title : '...',
      description: description,
      start: { day: `${day}.${month}.${year}`, time: startTime },
      end: { day: `${day}.${month}.${year}`, time: endTime },
    }).then(() => onUpdate());
    setOnOffBoolean(false);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={() => setOnOffBoolean(false)}
          >
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Write your title..."
              className="event-form__field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button
              className="event-form__submit-btn"
              onClick={(e) => onCreate(e)}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
