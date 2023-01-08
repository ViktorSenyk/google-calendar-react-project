import React from 'react';
import { getDisplayedMonth } from '../../utils/dateUtils';

import './header.scss';

const Header = ({ weekStartDay, setWeekStart }) => {
  const weekInMiliseconds = 6.048e8;
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={() => setWeekStart('reset')}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={() => setWeekStart(-weekInMiliseconds)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={() => setWeekStart(weekInMiliseconds)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {getDisplayedMonth(weekStartDay)}
        </span>
      </div>
    </header>
  );
};

export default Header;
