import React from 'react';
import { getDisplayedMonth } from '../../utils/utils';
import moment from 'moment';

import './header.scss';

export default function Header({ weekStartDate, onSetWeekStart, setIsModalWindowActive }) {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={() => setIsModalWindowActive(true)}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={() => onSetWeekStart(moment().startOf('isoWeek'))}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={() => onSetWeekStart(weekStartDate.subtract(7, 'd'))}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={() => onSetWeekStart(weekStartDate.add(7, 'd'))}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{getDisplayedMonth(weekStartDate)}</span>
      </div>
    </header>
  );
}
