import React from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

export default function Calendar({ weekStartDate }) {
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
  // ======================================= get info from element when was click
  const getInfoFromClick = (e) => {
    if (e.target.dataset.hour)
      console.log({
        hour: e.target.dataset.hour,
        day: e.target.closest('.calendar__day').dataset.day,
      });
    return {
      hour: e.target.dataset.hour,
      day: e.target.closest('.calendar__day').dataset.day,
    };
  };
  // ======================================= currentWeekInfo = ['DD.MM.YYYY dddd', 'DD.MM.YYYY dddd' ... + 5]
  const currentWeekInfo = currentWeekRangeInfoGenerator();
  // ======================================= render: Navigation, Sidebar, Week
  return (
    <section className="calendar">
      <Navigation currentWeekInfo={currentWeekInfo} />
      <div className="calendar__body" onClick={(e) => getInfoFromClick(e)}>
        <div className="calendar__week-container">
          <Sidebar />
          <Week currentWeekInfo={currentWeekInfo} />
        </div>
      </div>
    </section>
  );
}
