/*
  Course Schedule

  There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
  For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
  Return true if you can finish all courses. Otherwise, return false.

  Example:
  Input: [[1,0],[0,1]]
  Output: false
*/

function courseSchedule(prerequisites) {
  const visited = new Set();
  const inStack = new Set();
  const graph = buildGraph(prerequisites);

  for (const course of Object.keys(graph)) {
    if (isInCycle(graph, course, visited, inStack)) {
      return false;
    }
  }

  return true;
}

function isInCycle(graph, course, visited, inStack) {
  if (inStack.has(course)) {
    return true;
  }

  if (visited.has(course)) {
    return false;
  }

  visited.add(course);
  inStack.add(course);

  for (const dependency of graph[course]) {
    if (isInCycle(graph, dependency, visited, inStack)) {
      return true;
    }
  }

  inStack.delete(course);

  return false;
}

function buildGraph(arr) {
  return arr.reduce((acc, pair) => {
    if (!acc.hasOwnProperty(pair[0])) {
      acc[pair[0]] = [];
    }

    if (!acc.hasOwnProperty(pair[1])) {
      acc[pair[1]] = [];
    }

    acc[pair[0]].push(pair[1]);

    return acc;
  }, {});
}

const assert = require('assert');
assert.ok(
  !courseSchedule([
    [1, 0],
    [0, 1],
  ])
);
