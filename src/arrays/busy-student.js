/*
  Busy Student

  Given two integer arrays startTime and endTime and given an integer queryTime.
  The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
  Return the number of students doing their homework at time queryTime.
  More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

  Example:
  Input: [1,2,3], [3,2,7], 4
  Output: 1
*/

function busyStudent(startTime, endTime, queryTime) {
  let counter = 0;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
      counter++;
    }
  }

  return counter;
}

const assert = require('assert');
assert.equal(busyStudent([1, 2, 3], [3, 2, 7], 4), 1);
