/*
  Minimum Moves To Seat

  There are n seats and n students in a room.
  You are given an array seats of length n, where seats[i] is the position of the ith seat.
  You are also given the array students of length n, where students[j] is the position of the jth student.
  You may perform the following move any number of times:
  - Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
  Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

  Example:
  Input: [3,1,5], [2,7,4]
  Output: 4
*/

function minimumMovesToSeat(seats, students) {
  const sortedSeats = seats.slice().sort((a, b) => a - b);
  const sortedStudents = students.slice().sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sortedSeats.length; i++) {
    const diff = Math.abs(sortedSeats[i] - sortedStudents[i]);
    result += diff;
  }

  return result;
}

const assert = require('assert');
assert.equal(minimumMovesToSeat([3, 1, 5], [2, 7, 4]), 4);
