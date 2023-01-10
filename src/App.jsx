import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment';

// import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

export default class App extends Component {
  state = {
    weekStartDate: moment().startOf('isoWeek'),
  };

  onSetWeekStart = (set) =>
    this.setState({
      weekStartDate: this.setWeekStart(set),
    });

  setWeekStart = (set) => {
    if (set === '+') return this.state.weekStartDate.add(7, 'd');
    if (set === '-') return this.state.weekStartDate.subtract(7, 'd');
    return moment().startOf('isoWeek');
  };

  render = () => {
    // const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          weekStartDate={this.state.weekStartDate}
          onSetWeekStart={this.onSetWeekStart}
        />
        <Calendar
          weekStartDate={this.state.weekStartDate}
          // weekDates={weekDates}
        />
      </>
    );
  };
}
