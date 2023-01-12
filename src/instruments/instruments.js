// ======================================= days generator

export const currentWeekRangeInfoGenerator = (weekStartDate) => {
  const weekStartDayCopy = weekStartDate.clone();
  const currentWeekInfoArr = [weekStartDayCopy.format('DD.MM.YYYY dddd')];

  for (let i = 0; i < 6; i += 1) {
    currentWeekInfoArr.push(
      weekStartDayCopy.add(1, 'd').format('DD.MM.YYYY dddd')
    );
  }
  return currentWeekInfoArr;
};

// ======================================= get time info from click

export const getInfoFromClick = (e, setModalWindowBoolean, setClickInfo) => {
  if (e.target.dataset.minutes) {
    const [day, month, year] = e.target
      .closest('.calendar__day')
      .dataset.day.split('.');
    const chosenHour = e.target.closest('.calendar__time-slot').dataset.hour;
    const chosenMinutes = e.target.dataset.minutes;
    setModalWindowBoolean(true);
    setClickInfo({
      day: `${year}-${month}-${day}`,
      hour: chosenHour < 10 ? '0' + chosenHour : chosenHour,
      minutes: chosenMinutes < 10 ? '0' + chosenMinutes : chosenMinutes,
    });
  }
};

// ======================================= get displayed month for header

export const getDisplayedMonth = (weekStartDate) => {
  const weekStartDateCopy = weekStartDate.clone();
  return weekStartDate.format('MMMM YYYY') ===
    weekStartDateCopy.endOf('isoWeek').format('MMMM YYYY')
    ? weekStartDate.format('MMMM YYYY')
    : `${weekStartDate.format('MMMM YYYY')} — ${weekStartDateCopy
        .endOf('isoWeek')
        .format('MMMM YYYY')}`;
};
