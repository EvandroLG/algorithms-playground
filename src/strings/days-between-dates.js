/*
  Days Between Dates

  Write a program to count the number of days between two dates.
  The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

  Example:
  Input: "2019-06-29", "2019-06-30"
  Output: 1
*/

function daysBetweenDates(date1, date2) {
  const diffTime = Math.abs(new Date(date1) - new Date(date2));
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
}

const assert = require('assert');
assert.equal(daysBetweenDates('2019-06-29', '2019-06-30'), 1);
