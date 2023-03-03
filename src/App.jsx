import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment';

import './common.scss';

export default class App extends Component {
  state = {
    weekStartDate: moment().startOf('isoWeek'),
    isModalWindowActive: false,
  };

  setIsModalWindowActive = boolean => this.setState({ isModalWindowActive: boolean });

  onSetWeekStart = set =>
    this.setState({
      weekStartDate: set,
    });

  render = () => (
    <>
      <Header
        weekStartDate={this.state.weekStartDate}
        onSetWeekStart={this.onSetWeekStart}
        setIsModalWindowActive={this.setIsModalWindowActive}
      />
      <Calendar {...this.state} setIsModalWindowActive={this.setIsModalWindowActive} />
    </>
  );
}
