import React, { useState, useEffect } from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import { updateFromServer } from '../../gateway/tasksGateway';
import {
  currentWeekRangeInfoGenerator,
  getInfoFromClick,
} from '../../instruments/instruments';

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

  //////////////////
  const [infoFromClickedEvent, setInfoFromClickedEvent] = useState(null);
  //////////////////

  const onUpdate = () => {
    updateFromServer().then((data) => updateEvents(data));
  };

  useEffect(() => {
    onUpdate();
  }, []);

  const currentWeekInfo = currentWeekRangeInfoGenerator(weekStartDate);

  return (
    <section className="calendar">
      {modalWindowBoolean ? (
        <Modal
          setOnOffBoolean={setModalWindowBoolean}
          clickInfo={clickInfo}
          infoFromClickedEvent={infoFromClickedEvent}
          onUpdate={onUpdate}
        />
      ) : null}
      <Navigation currentWeekInfo={currentWeekInfo} />
      <div
        className="calendar__body"
        onClick={(e) =>
          getInfoFromClick(e, setModalWindowBoolean, setClickInfo)
        }
      >
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            currentWeekInfo={currentWeekInfo}
            events={events}
            onUpdate={onUpdate}
            setInfoFromClickedEvent={setInfoFromClickedEvent}
            setModalWindowBoolean={setModalWindowBoolean}
          />
        </div>
      </div>
    </section>
  );
}
