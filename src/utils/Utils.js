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

  const monday = [];
  const tuesday = [];
  const wednesday = [];
  const thursday = [];
  const friday = [];
  const saturday = [];
  const sunday = [];

  for (let day of allDays[0]) {
    if (day === 'Monday') {
      monday.push(day);
    }
    if (day === 'Tuesday') {
      tuesday.push(day);
    }
    if (day === 'Wednesday') {
      wednesday.push(day);
    }
    if (day === 'Thursday') {
      thursday.push(day);
    }
    if (day === 'Friday') {
      friday.push(day);
    }
    if (day === 'Saturday') {
      saturday.push(day);
    }
    if (day === 'Sunday') {
      sunday.push(day);
    }
  }

  return [
    monday.length,
    tuesday.length,
    wednesday.length,
    thursday.length,
    friday.length,
    saturday.length,
    sunday.length,
  ];
}
