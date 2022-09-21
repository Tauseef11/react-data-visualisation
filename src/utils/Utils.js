export default function getDay(date) {
  const newDate = new Date(date);
  const options = { weekday: 'long' };
  const day = new Intl.DateTimeFormat('en-US', options).format(newDate);

  return day;
}

export function getTime(date) {
  const newDate = new Date(date);
  const time = newDate.toLocaleTimeString('en-GB');

  return time;
}

export function sortDays(SegmentData) {
  const allDays = SegmentData.map((data) =>
    data.contacts.map((contacts) => getDay(contacts.campaignEvents[0].at))
  );

  const daysCount = [];

  const daysArray = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  
  for (let day of daysArray) {
    daysCount.push(allDays[0].filter(element => element === day).length);
  }

  return daysCount;
}
