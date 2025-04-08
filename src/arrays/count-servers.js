/*
  Count Servers

  You are given an integer n denoting the total number of servers and a 2D 0-indexed integer array logs, where logs[i] = [server_id, time] denotes that the server with id server_id received a request at time time.
  You are also given an integer x and a 0-indexed integer array queries.
  Return a 0-indexed integer array arr of length queries.length where arr[i] represents the number of servers that did not receive any requests during the time interval [queries[i] - x, queries[i]].

  Example:
  Input: 3, [[1,3],[2,6],[1,5]], 5, [10,11]
  Output: [1,2]
*/

function countServers(n, logs, x, queries) {
  const mapLogs = buildMapLogs(n, logs);
  const intervals = queries.map((query) => [query - x, query]);
  const output = [];

  for (const [start, end] of intervals) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
      const times = mapLogs[i];
      let hasRequestInInterval = false;

      for (const time of times) {
        if (time >= start && time <= end) {
          hasRequestInInterval = true;
          break;
        }
      }

      if (!hasRequestInInterval) {
        total++;
      }
    }

    output.push(total);
  }

  return output;
}

function buildMapLogs(servers, logs) {
  const map = {};

  for (let i = 1; i <= servers; i++) {
    map[i] = [];
  }

  for (const [server, time] of logs) {
    map[server].push(time);
  }

  return map;
}

const assert = require('assert');
assert.deepEqual(
  countServers(
    3,
    [
      [1, 3],
      [2, 6],
      [1, 5],
    ],
    5,
    [10, 11]
  ),
  [1, 2]
);
