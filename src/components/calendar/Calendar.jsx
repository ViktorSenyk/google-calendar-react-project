import React, { Component, useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';
import Modal from '../modal/Modal';

export default class Calendar extends Component {
  state = {
    modalWindowBoolean: false,
    clickInfo: false,
  };
  setModalWindowBoolean = () =>
    this.setState({ modalWindowBoolean: !this.state.modalWindowBoolean });
  // ======================================= days generator
  currentWeekRangeInfoGenerator = () => {
    const weekStartDayCopy = this.props.weekStartDate.clone();
    const currentWeekInfoArr = [weekStartDayCopy.format('DD.MM.YYYY dddd')];

    for (let i = 0; i < 6; i += 1) {
      currentWeekInfoArr.push(
        weekStartDayCopy.add(1, 'd').format('DD.MM.YYYY dddd')
      );
    }
    return currentWeekInfoArr;
  };
  // ======================================= get time info from click
  getInfoFromClick = (e) => {
    if (e.target.dataset.minutes) {
      const [day, month, year] = e.target
        .closest('.calendar__day')
        .dataset.day.split('.');
      const chosenHour = e.target.closest('.calendar__time-slot').dataset.hour;
      const chosenMinutes = e.target.dataset.minutes;
      this.setState({
        modalWindowBoolean: !this.state.modalWindowBoolean,
        clickInfo: {
          day: `${year}-${month}-${day}`,
          hour: chosenHour < 10 ? '0' + chosenHour : chosenHour,
          minutes: chosenMinutes < 10 ? '0' + chosenMinutes : chosenMinutes,
        },
      });
    }
  };
  // ======================================= currentWeekInfo = ['DD.MM.YYYY dddd', 'DD.MM.YYYY dddd' ... + 5]
  currentWeekInfo = this.currentWeekRangeInfoGenerator();
  // ======================================= render: Navigation, Sidebar, Week
  render = () => (
    <section className="calendar">
      <Modal
        onOffBoolean={this.state.modalWindowBoolean}
        setOnOffBoolean={this.setModalWindowBoolean}
        clickInfo={this.state.clickInfo}
      />
      <Navigation currentWeekInfo={this.currentWeekInfo} />
      <div className="calendar__body" onClick={(e) => this.getInfoFromClick(e)}>
        <div className="calendar__week-container">
          <Sidebar />
          <Week currentWeekInfo={this.currentWeekInfo} />
        </div>
      </div>
    </section>
  );
}

// export default function Calendar({ weekStartDate }) {
//   const [modalWindowBoolean, setModalWindowBoolean] = useState(false);
//   const [clickInfo, setClickInfo] = useState({});
//   console.log(clickInfo);
//   // ======================================= days generator
//   const currentWeekRangeInfoGenerator = () => {
//     const weekStartDayCopy = weekStartDate.clone();
//     const currentWeekInfoArr = [weekStartDayCopy.format('DD.MM.YYYY dddd')];

//     for (let i = 0; i < 6; i += 1) {
//       currentWeekInfoArr.push(
//         weekStartDayCopy.add(1, 'd').format('DD.MM.YYYY dddd')
//       );
//     }
//     return currentWeekInfoArr;
//   };
//   // ======================================= get time info from click
//   const getInfoFromClick = (e) => {
//     if (e.target.dataset.minutes) {
//       const [day, month, year] = e.target
//         .closest('.calendar__day')
//         .dataset.day.split('.');
//       const chosenHour = e.target.closest('.calendar__time-slot').dataset.hour;
//       const chosenMinutes = e.target.dataset.minutes;
//       setModalWindowBoolean(!modalWindowBoolean);
//       setClickInfo({
//         day: `${year}-${month}-${day}`,
//         hour: chosenHour < 10 ? '0' + chosenHour : chosenHour,
//         minutes: chosenMinutes < 10 ? '0' + chosenMinutes : chosenMinutes,
//       });
//     }
//   };
//   // ======================================= currentWeekInfo = ['DD.MM.YYYY dddd', 'DD.MM.YYYY dddd' ... + 5]
//   const currentWeekInfo = currentWeekRangeInfoGenerator();
//   // ======================================= render: Navigation, Sidebar, Week
//   return (
//     <section className="calendar">
//       <Modal
//         onOffBoolean={modalWindowBoolean}
//         setOnOffBoolean={setModalWindowBoolean}
//         clickInfo={clickInfo}
//       />
//       <Navigation currentWeekInfo={currentWeekInfo} />
//       <div className="calendar__body" onClick={(e) => getInfoFromClick(e)}>
//         <div className="calendar__week-container">
//           <Sidebar />
//           <Week currentWeekInfo={currentWeekInfo} />
//         </div>
//       </div>
//     </section>
//   );
// }
