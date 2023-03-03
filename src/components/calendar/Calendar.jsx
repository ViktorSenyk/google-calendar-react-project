import React, { useState, useEffect } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import { fetchEvents } from '../../gateway/tasksGateway';
import { getCurrentWeekRange } from '../../utils/utils';
import moment from 'moment';

import './calendar.scss';

export default function Calendar({ weekStartDate, isModalWindowActive, setIsModalWindowActive }) {
  const [currentDate, currentHour, currentMinutes] = moment().format('YYYY-MM-DD hh mm').split(' ');

  const [selectedDateByClick, setSelectedDateByClick] = useState({
    day: currentDate,
    hour: currentHour,
    minutes: currentMinutes,
  });

  const [events, updateEvents] = useState([]);

  const [infoFromClickedEvent, setInfoFromClickedEvent] = useState(null);

  const onUpdate = () => {
    fetchEvents().then(data => updateEvents(data));
  };

  useEffect(() => {
    onUpdate();
  }, []);

  const currentWeekInfo = getCurrentWeekRange(weekStartDate);

  const getDateFromClick = (e, setIsModalWindowActive, setClickInfo) => {
    if (e.target.dataset.minutes) {
      const [day, month, year] = e.target.closest('.calendar__day').dataset.day.split('.');
      const chosenHour = e.target.closest('.calendar__time-slot').dataset.hour;
      const chosenMinutes = e.target.dataset.minutes;
      setIsModalWindowActive(true);
      setClickInfo({
        day: `${year}-${month}-${day}`,
        hour: chosenHour < 10 ? '0' + chosenHour : chosenHour,
        minutes: chosenMinutes < 10 ? '0' + chosenMinutes : chosenMinutes,
      });
    }
  };

  return (
    <section className="calendar">
      {isModalWindowActive ? (
        <Modal
          setIsModalWindowActive={setIsModalWindowActive}
          selectedDateByClick={selectedDateByClick}
          infoFromClickedEvent={infoFromClickedEvent}
          onUpdate={onUpdate}
        />
      ) : null}
      <Navigation currentWeekInfo={currentWeekInfo} />
      <div
        className="calendar__body"
        onClick={e => getDateFromClick(e, setIsModalWindowActive, setSelectedDateByClick)}
      >
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            currentWeekInfo={currentWeekInfo}
            events={events}
            onUpdate={onUpdate}
            setInfoFromClickedEvent={setInfoFromClickedEvent}
            setIsModalWindowActive={setIsModalWindowActive}
          />
        </div>
      </div>
    </section>
  );
}
