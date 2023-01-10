// const events = [
//   {
//     id: 1,
//     title: 'Go to the gym',
//     description: 'some text here',
//     dateFrom: new Date(2020, 8, 15, 10, 15),
//     dateTo: new Date(2020, 8, 15, 15, 0),
//   },
//   {
//     id: 2,
//     title: 'Go to the school',
//     description: 'hello, 2 am',
//     dateFrom: new Date(2020, 8, 16, 10, 15),
//     dateTo: new Date(2020, 8, 16, 11, 0),
//   },
//   {
//     id: 3,
//     title: 'Lunch',
//     description: '',
//     dateFrom: new Date(2020, 8, 17, 10, 30),
//     dateTo: new Date(2020, 8, 17, 11, 30),
//   },
//   {
//     id: 4,
//     title: 'Meet friend',
//     description: 'at the cafe',
//     dateFrom: new Date(2020, 8, 25, 10, 30),
//     dateTo: new Date(2020, 8, 25, 11, 0),
//   },
// ];

const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    start: { day: '12.01.2023', time: 8 },
    end: { day: '12.01.2023', time: 12 },
  },
  {
    id: 2,
    title: 'Go to the walk',
    description: 'some text here',
    start: { day: '13.01.2023', time: 2 },
    end: { day: '13.01.2023', time: 5 },
  },
  {
    id: 3,
    title: 'Go to museum',
    description: 'some text here',
    start: { day: '14.01.2023', time: 0 },
    end: { day: '14.01.2023', time: 2 },
  },
  {
    id: 4,
    title: 'Go to museum',
    description: 'some text here',
    start: { day: '09.02.2023', time: 0 },
    end: { day: '09.02.2023', time: 2 },
  },
  {
    id: 5,
    title: 'Go to past',
    description: 'some text here',
    start: { day: '20.12.2022', time: 1 },
    end: { day: '20.12.2022', time: 22 },
  },
];

export default events;
