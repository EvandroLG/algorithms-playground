/*
  Course Schedule V2

  There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
  You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
  For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
  Return the ordering of courses you should take to finish all courses.
   If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

   Example:
   Input: 4, [[1,0],[2,0],[3,1],[3,2]]
   Output: [0,2,1,3]
*/

function courseScheduleV2(n, prerequisites) {
  const graph = buildGraph(n, prerequisites);
  const stack = [];
  const visited = new Set();
  const visiting = new Set();

  for (const node of graph.keys()) {
    if (!traverse(graph, node, visited, visiting, stack)) {
      return [];
    }
  }

  return stack.reverse();
}

function traverse(graph, node, visited, visiting, stack) {
  if (visited.has(node)) {
    return true;
  }

  if (visiting.has(node)) {
    return false;
  }

  visited.add(node);
  visiting.add(node);

  for (const connection of graph.get(node)) {
    if (!traverse(graph, connection, visited, visiting, stack)) {
      return false;
    }
  }

  stack.push(node);
  visiting.delete(node);

  return true;
}

function buildGraph(n, arr) {
  const graph = new Map();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (const [course, dependency] of arr) {
    graph.get(dependency).push(course);
  }

  return graph;
}

const assert = require('assert');
assert.deepStrictEqual(
  courseScheduleV2(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
  [0, 2, 1, 3]
);
