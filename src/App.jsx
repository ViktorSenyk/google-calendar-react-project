import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment';

import './common.scss';

export default class App extends Component {
  state = {
    weekStartDate: moment().startOf('isoWeek'),
    modalWindowBoolean: false,
  };

  setModalWindowBoolean = (boolean) =>
    this.setState({ modalWindowBoolean: boolean });

  onSetWeekStart = (set) =>
    this.setState({
      weekStartDate: this.setWeekStart(set),
    });

  setWeekStart = (set) => {
    if (set === '+') return this.state.weekStartDate.add(7, 'd');
    if (set === '-') return this.state.weekStartDate.subtract(7, 'd');
    return moment().startOf('isoWeek');
  };

  render = () => (
    <>
      <Header
        weekStartDate={this.state.weekStartDate}
        onSetWeekStart={this.onSetWeekStart}
        setModalWindowBoolean={this.setModalWindowBoolean}
      />
      <Calendar
        weekStartDate={this.state.weekStartDate}
        modalWindowBoolean={this.state.modalWindowBoolean}
        setModalWindowBoolean={this.setModalWindowBoolean}
      />
    </>
  );
}
