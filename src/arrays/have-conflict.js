/*
  Have Conflict

  You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:
  - event1 = [startTime1, endTime1] and
  - event2 = [startTime2, endTime2].
  Event times are valid 24 hours format in the form of HH:MM.
  A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).
  Return true if there is a conflict between two events. Otherwise, return false.

  Example:
  Input: ["01:15","02:00"], ["02:00","03:00"]
  Output: true
*/

function haveConflict(eventA, eventB) {
  if (isGreater(eventA[0], eventB[0], false)) {
    return haveConflict(eventB, eventA);
  }

  if (isGreater(eventA[1], eventB[0])) {
    return true;
  }

  return false;
}

function isGreater(a, b, orEqual = true) {
  const [hourA, minuteA] = a.split(':');
  const [hourB, minuteB] = b.split(':');

  if (hourA.localeCompare(hourB) === -1) {
    return false;
  }

  if (hourA.localeCompare(hourB) === 1) {
    return true;
  }

  if (orEqual && minuteA.localeCompare(minuteB) >= 0) {
    return true;
  }

  if (minuteA.localeCompare(minuteB) > 0) {
    return true;
  }

  return false;
}

const assert = require('assert');
assert.ok(haveConflict(['01:15', '02:00'], ['02:00', '03:00']));
