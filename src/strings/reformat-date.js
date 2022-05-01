/*
  Reformat Date

  Given a date string in the form Day Month Year, where:

  Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
  Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
  Year is in the range [1900, 2100].

  Example:
  Input: "20th Oct 2052"
  Output: "2052-10-20"
*/

function reformatDate(date) {
  const hashMonth = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };

  const [day, month, year] = date.split(' ');
  return `${year}-${hashMonth[month]}-${formatDay(day)}`;
}

function formatDay(s) {
  const result = s.slice(0, -2);
  return result.length === 1 ? '0' + result : result;
}

const assert = require('assert');
assert.equal(reformatDate('16th Dec 2018'), '2018-12-16');
