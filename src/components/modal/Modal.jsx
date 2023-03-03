import React, { useState } from 'react';
import { onCreateTask } from '../../gateway/tasksGateway';

import './modal.scss';

export default function Modal({
  setIsModalWindowActive,
  selectedDateByClick,
  infoFromClickedEvent,
  onUpdate,
}) {
  const [formData, setFormData] = useState({
    title: infoFromClickedEvent ? infoFromClickedEvent.title : '',
    description: infoFromClickedEvent ? infoFromClickedEvent.description : '',
    startDate: selectedDateByClick.day,
    startTime: `${selectedDateByClick.hour}:${selectedDateByClick.minutes}`,
    endTime: '23:45',
  });

  const onCreate = e => {
    e.preventDefault();
    const [year, month, day] = formData.startDate.split('-');
    onCreateTask({
      title: formData.title ? formData.title : '...',
      description: formData.description,
      start: { day: `${day}.${month}.${year}`, time: formData.startTime },
      end: { day: `${day}.${month}.${year}`, time: formData.endTime },
    }).then(() => onUpdate());
    setIsModalWindowActive(false);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => setIsModalWindowActive(false)}>
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Write your title..."
              className="event-form__field"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={formData.startDate}
                onChange={e => setFormData({ ...formData, startDate: e.target.value })}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={formData.startTime}
                onChange={e => setFormData({ ...formData, startTime: e.target.value })}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={formData.endTime}
                onChange={e => setFormData({ ...formData, endTime: e.target.value })}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
            ></textarea>
            <button className="event-form__submit-btn" onClick={e => onCreate(e)}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
