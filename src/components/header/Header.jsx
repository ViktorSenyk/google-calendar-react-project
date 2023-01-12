import React from 'react';

import './header.scss';

export default function Header({
  weekStartDate,
  onSetWeekStart,
  setModalWindowBoolean,
}) {
  const getDisplayedMonth = () => {
    const weekStartDateCopy = weekStartDate.clone();
    return weekStartDate.format('MMMM YYYY') ===
      weekStartDateCopy.endOf('isoWeek').format('MMMM YYYY')
      ? weekStartDate.format('MMMM YYYY')
      : `${weekStartDate.format('MMMM YYYY')} — ${weekStartDateCopy
          .endOf('isoWeek')
          .format('MMMM YYYY')}`;
  };

  return (
    <header className="header">
      <button
        className="button create-event-btn"
        onClick={() => setModalWindowBoolean(true)}
      >
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={() => onSetWeekStart()}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={() => onSetWeekStart('-')}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={() => onSetWeekStart('+')}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {getDisplayedMonth()}
        </span>
      </div>
    </header>
  );
}
