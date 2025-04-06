/*
  My Calendar

  You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.
  A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).
  The event can be represented as a pair of integers startTime and endTime that represents a booking on the half-open interval [startTime, endTime), the range of real numbers x such that startTime <= x < endTime.
  Implement the MyCalendar class:
  - MyCalendar() Initializes the calendar object.
  - boolean book(int startTime, int endTime) Returns true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.
*/

class MyCalendar {
  constructor() {
    this.events = [];
  }

  book(startTime, endTime) {
    const pair = [startTime, endTime];

    if (!this.events) {
      this.events(pair);
      return true;
    }

    for (const booked of this.events) {
      if (startTime >= booked[0] && startTime < booked[1]) {
        return false;
      }

      if (endTime > booked[0] && endTime < booked[1]) {
        return false;
      }

      if (startTime < booked[0] && endTime >= booked[1]) {
        return false;
      }
    }

    this.events.push(pair);
    this.events.sort((a, b) => a[0] - b[0]);

    return true;
  }
}

const assert = require('assert');
const calendar = new MyCalendar();

assert.ok(calendar.book(10, 20));
assert.ok(!calendar.book(15, 25));
assert.ok(calendar.book(20, 30));
