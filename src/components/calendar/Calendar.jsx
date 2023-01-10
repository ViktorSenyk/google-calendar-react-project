import React from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

export default function Calendar({ weekStartDate }) {
  const currentWeekRangeInfoGenerator = () => {
    const weekStartDayCopy = weekStartDate.clone();
    const DaysRangeArr = [weekStartDayCopy.format('DD.MM.YYYY dddd')];
    for (let i = 0; i < 6; i += 1) {
      DaysRangeArr.push(weekStartDayCopy.add(1, 'd').format('DD.MM.YYYY dddd'));
    }
    return DaysRangeArr;
  };

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

  const currentWeekInfo = currentWeekRangeInfoGenerator();

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
