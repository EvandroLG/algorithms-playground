/*
  Class Photos

  It's photo day at the local school, and you're the photographer assigned to take class photos. The class that you'll be photographing has an even number of students, and all these students are wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and the other half is wearing blue shirts. You're responsible for arranging the students in two rows before taking the photo. Each row should contain the same number of the students and should adhere to the following guidelines:
  All students wearing red shirts must be in the same row.
  All students wearing blue shirts must be in the same row.
  Each student in the back row must be strictly taller than the student directly in front of them in the front row.
  You're given two input arrays: one containing the heights of all the students with red shirts and another one containing the heights of all the students with blue shirts. These arrays will always have the same length, and each height will be a positive integer. Write a function that returns whether or not a class photo that follows the stated guidelines can be taken.
  Note: you can assume that each class has at least 2 students.

  Sample Input
  redShirtHeights = [5, 8, 1, 3, 4]
  blueShirtHeights = [6, 9, 2, 4, 5]

  Sample Output
  true // Place all students with blue shirts in the back row.
*/

const BLUE = 'BLUE';
const RED = 'RED';

function classPhotos(blueShirts, redShirts) {
  const size = blueShirts.length;
  const sortedBlue = blueShirts.slice().sort((a, b) => a - b);
  const sortedRed = redShirts.slice().sort((a, b) => a - b);
  const inFront = sortedBlue[0] > sortedRed[0] ? RED : BLUE;

  for (let i = 0; i < size; i++) {
    const blueStudent = sortedBlue[i];
    const redStudent = sortedRed[i];

    if (inFront === BLUE) {
      if (blueStudent >= redStudent) {
        return false;
      }
    } else if (redStudent >= blueStudent) {
      return false;
    }
  }

  return true;
}

const assert = require('assert');
assert.ok(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]));
