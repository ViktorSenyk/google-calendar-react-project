import React, { Component, useState } from 'react';

import './modal.scss';

// export default class Modal extends Component {
//   state = {
//     title: '',
//     startDate: this.props.clickInfo.day,
//   };
//   render = () => {
//     console.log(this.props.clickInfo.day);
//     console.log(this.state.startDate);
//     return (
//       <div
//         className="modal overlay"
//         style={{ display: this.props.onOffBoolean ? 'flex' : 'none' }}
//       >
//         <div className="modal__content">
//           <div className="create-event">
//             <button
//               className="create-event__close-btn"
//               onClick={() =>
//                 this.props.setOnOffBoolean(!this.props.onOffBoolean)
//               }
//             >
//               +
//             </button>
//             <form className="event-form">
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Write your title..."
//                 className="event-form__field"
//                 value={this.state.title}
//                 onChange={(e) => this.setState({ title: e.target.value })}
//               />
//               <div className="event-form__time">
//                 <input
//                   type="date"
//                   name="date"
//                   className="event-form__field"
//                   value={this.state.startDate}
//                   onChange={(e) => this.setState({ startDate: e.target.value })}
//                 />
//                 <input
//                   type="time"
//                   name="startTime"
//                   className="event-form__field"
//                 />
//                 <span>-</span>
//                 <input
//                   type="time"
//                   name="endTime"
//                   className="event-form__field"
//                 />
//               </div>
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 className="event-form__field"
//               ></textarea>
//               <button type="submit" className="event-form__submit-btn">
//                 Create
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };
// }

export default function Modal({ onOffBoolean, setOnOffBoolean, clickInfo }) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(clickInfo ? clickInfo.day : '2023-11-17');
  console.log(clickInfo.day);
  console.log(startDate);

  return (
    <div
      className="modal overlay"
      style={{ display: onOffBoolean ? 'flex' : 'none' }}
    >
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={() => setOnOffBoolean(!onOffBoolean)}
          >
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Write your title..."
              className="event-form__field"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
              />
              <span>-</span>
              <input type="time" name="endTime" className="event-form__field" />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
