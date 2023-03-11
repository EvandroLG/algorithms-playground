/*
  Sort Students

  There is a class with m students and n exams. You are given a 0-indexed m x n integer matrix score, where each row represents one student and score[i][j] denotes the score the ith student got in the jth exam.
  The matrix score contains distinct integers only.
  You are also given an integer k. Sort the students (i.e., the rows of the matrix) by their scores in the kth (0-indexed) exam from the highest to the lowest.
  Return the matrix after sorting it.

  Example:
  Input: [[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2
  Output: [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
*/

function sortStudents(score, k) {
  const testScores = buildTestScores(score, k);
  const sorted = testScores.sort((a, b) => b[1] - a[1]);
  const output = [];

  for (const [idx] of sorted) {
    const row = score[idx];
    output.push(row);
  }

  return output;
}

function buildTestScores(score, k) {
  return score.reduce((acc, scores, idx) => {
    const row = [idx, scores[k]];
    acc.push(row);

    return acc;
  }, []);
}

const assert = require('assert');
const scores = [
  [10, 6, 9, 1],
  [7, 5, 11, 2],
  [4, 8, 3, 15],
];

assert.deepEqual(sortStudents(scores, 2), [
  [7, 5, 11, 2],
  [10, 6, 9, 1],
  [4, 8, 3, 15],
]);
