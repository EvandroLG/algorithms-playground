/*
  Find The Town Judge

  In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
  If the town judge exists, then:
  The town judge trusts nobody.
  - Everybody (except for the town judge) trusts the town judge.
  - There is exactly one person that satisfies properties 1 and 2.
  -You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

  Example:
  Input: 3, [[1,3],[2,3]]
  Output: 3
*/

function createGraph(n, arr) {
  const graph = Array(n)
    .fill(1)
    .map((item, idx) => item * (idx + 1))
    .reduce((acc, key) => {
      acc[key] = [];
      return acc;
    }, {});

  for (const item of arr) {
    const idx = item[0];
    graph[idx].push('' + item[1]);
  }

  return graph;
}

function traverse(pivot, graph) {
  const keys = Object.keys(graph);

  for (const key of keys) {
    if (key === pivot) {
      continue;
    }

    if (!graph[key].includes(pivot)) {
      return false;
    }
  }

  return true;
}

function findTheTownJudge(n, trust) {
  const graph = createGraph(n, trust);
  const noConnections = Object.keys(graph).filter((key) => !graph[key].length);

  for (const key of noConnections) {
    if (traverse(key, graph)) {
      return key;
    }
  }

  return -1;
}

const assert = require('assert');
assert.equal(
  findTheTownJudge(3, [
    [1, 3],
    [2, 3],
  ]),
  '3'
);
