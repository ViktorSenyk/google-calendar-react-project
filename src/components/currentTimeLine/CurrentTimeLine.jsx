import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './currentTimeLine.scss';

export default function CurrentTimeLine() {
  const [currentHoursForStartPosition, currentMinutesForStartPosition] = moment()
    .format('H:m')
    .split(':');

  const [topMarginForLine, setTopMarginForLine] = useState(
    Number(currentHoursForStartPosition) * 60 + Number(currentMinutesForStartPosition),
  );

  useEffect(() => {
    setInterval(() => {
      const [hours, minutes] = moment().format('H:m').split(':');
      setTopMarginForLine(Number(hours) * 60 + Number(minutes));
    }, 60000);
  }, []);

  return (
    <div className="currentTimeLine" style={{ top: topMarginForLine + 'px' }}>
      <div className="currentTimeLine__circle" />
    </div>
  );
}
