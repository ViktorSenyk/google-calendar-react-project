export const getCurrentWeekRange = weekStartDate => {
  const weekStartDayCopy = weekStartDate.clone();
  const currentWeekInfoArr = [weekStartDayCopy.format('DD.MM.YYYY dddd')];
  for (let i = 0; i < 6; i += 1) {
    currentWeekInfoArr.push(weekStartDayCopy.add(1, 'd').format('DD.MM.YYYY dddd'));
  }
  return currentWeekInfoArr;
};

export const getDisplayedMonth = weekStartDate => {
  const weekStartDateCopy = weekStartDate.clone();
  return weekStartDate.format('MMMM YYYY') ===
    weekStartDateCopy.endOf('isoWeek').format('MMMM YYYY')
    ? weekStartDate.format('MMMM YYYY')
    : `${weekStartDate.format('MMMM YYYY')} — ${weekStartDateCopy
        .endOf('isoWeek')
        .format('MMMM YYYY')}`;
};
