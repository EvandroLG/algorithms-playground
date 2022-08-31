/*
  Minimum Time

  You are given two 0-indexed integer arrays jobs and workers of equal length, where jobs[i] is the amount of time needed to complete the ith job, and workers[j] is the amount of time the jth worker can work each day.
  Each job should be assigned to exactly one worker, such that each worker completes exactly one job.
  Return the minimum number of days needed to complete all the jobs after assignment.

  Example:
  Input: [5,2,4], [1,7,5]
  Output: 2
*/

function minimumTime(jobs, workers) {
  let max = 0;
  const sortedJobs = jobs.slice().sort((a, b) => b - a);
  const sortedWorkers = workers.slice().sort((a, b) => b - a);

  for (let i = 0; i < sortedJobs.length; i++) {
    max = Math.max(max, Math.ceil(sortedJobs[i] / sortedWorkers[i]));
  }

  return max;
}

const assert = require('assert');
assert.equal(minimumTime([5, 2, 4], [1, 7, 5]), 2);
