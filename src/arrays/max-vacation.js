/*
  Max Vacation

  Given a calendar with working days and holidays and defined number of vacations/PTO you can take.
  Find how can you plan your PTO so that you get maximum number of days as vacation, and return maximun number of vacation days.


  Example:
  Input: ['H','H','H','W','W','W','W'], 3
  Output: 6
*/

function maxVacation(calendar, pto) {
  let workdays = 0;
  let startWindow = 0;
  let tmp = 0;
  let max = 0;

  for (let endWindow = 0; endWindow < calendar.length; endWindow++) {
    if (calendar[endWindow] === 'H') {
      tmp++;
      max = Math.max(tmp, max);
    } else {
      workdays++;

      if (workdays <= pto) {
        tmp++;
        max = Math.max(tmp, max);
      } else {
        startWindow++;
        tmp--;

        while (calendar[startWindow] === 'H') {
          tmp--;
          startWindow++;
        }

        workdays--;
      }
    }
  }

  return max;
}

const assert = require('assert');
assert.strictEqual(maxVacation(['H', 'H', 'H', 'W', 'W', 'W', 'W'], 3), 6);
