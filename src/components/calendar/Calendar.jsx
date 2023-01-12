import React, { useState, useEffect } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import { updateFromServer } from '../../gateway/tasksGateway';

import './calendar.scss';

export default function Calendar({
  weekStartDate,
  modalWindowBoolean,
  setModalWindowBoolean,
}) {
  const [clickInfo, setClickInfo] = useState({
    day: '2023-01-11',
    hour: '12',
    minutes: '00',
  });

  const [events, updateEvents] = useState([]);
  const onUpdate = () => {
    updateFromServer().then((data) => updateEvents(data));
  };
  useEffect(() => {
    onUpdate();
  }, []);

  // ======================================= days generator
  const currentWeekRangeInfoGenerator = () => {
    const weekStartDayCopy = weekStartDate.clone();
    const currentWeekInfoArr = [weekStartDayCopy.format('DD.MM.YYYY dddd')];

    for (let i = 0; i < 6; i += 1) {
      currentWeekInfoArr.push(
        weekStartDayCopy.add(1, 'd').format('DD.MM.YYYY dddd')
      );
    }
    return currentWeekInfoArr;
  };
  // ======================================= get time info from click
  const getInfoFromClick = (e) => {
    if (e.target.dataset.minutes) {
      const [day, month, year] = e.target
        .closest('.calendar__day')
        .dataset.day.split('.');
      const chosenHour = e.target.closest('.calendar__time-slot').dataset.hour;
      const chosenMinutes = e.target.dataset.minutes;
      setModalWindowBoolean(true);
      setClickInfo({
        day: `${year}-${month}-${day}`,
        hour: chosenHour < 10 ? '0' + chosenHour : chosenHour,
        minutes: chosenMinutes < 10 ? '0' + chosenMinutes : chosenMinutes,
      });
    }
  };


  // ======================================= currentWeekInfo = ['DD.MM.YYYY dddd', 'DD.MM.YYYY dddd' ... + 5]
  const currentWeekInfo = currentWeekRangeInfoGenerator();
  // ======================================= render: Navigation, Sidebar, Week
  return (
    <section className="calendar">
      {modalWindowBoolean ? (
        <Modal
          setOnOffBoolean={setModalWindowBoolean}
          clickInfo={clickInfo}
          onUpdate={onUpdate}
        />
      ) : null}
      <Navigation currentWeekInfo={currentWeekInfo} />
      <div className="calendar__body" onClick={(e) => getInfoFromClick(e)}>
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            currentWeekInfo={currentWeekInfo}
            events={events}
            onUpdate={onUpdate}
          />
        </div>
      </div>
    </section>
  );
}
