/*
  Find Most Common Title

  You work for a professional social network. In this social network, a professional
  can follow other people to see their updates (think Twitter for professionals.).
  Write a function that finds the job `title` that shows up most frequently given
  a set of degree of separation from a given id. Count the initial id's own job title in the total
*/

function getUser(users, id) {
  return users.find((user) => user.id === id);
}

function findMostCommonTitle(users, id, degreesOfSeparation) {
  const memo = {};
  const visited = new Set([id]);

  (function findMostCommonTitleHelper(idx, degrees) {
    if (degrees === 0) {
      return;
    }

    const { connections } = getUser(users, idx);

    for (const connectionId of connections) {
      if (visited.has(connectionId)) {
        continue;
      }

      visited.add(connectionId);
      const { title } = getUser(users, connectionId);

      if (memo.hasOwnProperty(title)) {
        memo[title] += 1;
      } else {
        memo[title] = 1;
      }

      findMostCommonTitleHelper(connectionId, degrees - 1);
    }
  })(id, degreesOfSeparation);

  return Object.keys(memo).reduce(
    (acc, key) => {
      if (memo[key] > acc.total) {
        acc.title = key;
        acc.total = memo[key];
      }

      return acc;
    },
    { title: null, total: 0 }
  ).title;
}

const assert = require('assert');

const users = [
  {
    id: 1,
    name: 'Leia Goede',
    company: 'Bluejam',
    title: 'Software Engineer',
    connections: [2, 3, 4],
  },
  {
    id: 2,
    name: 'Ingelbert Pickston',
    company: 'Layo',
    title: 'Scrum Master',
    connections: [1, 4],
  },
  {
    id: 3,
    name: 'Elisha Janota',
    company: 'Skyble',
    title: 'Software Engineer',
    connections: [1, 5],
  },
  {
    id: 4,
    name: 'Gayler Sexten',
    company: 'Tanoodle',
    title: 'Software Engineer',
    connections: [2, 5, 1],
  },
  {
    id: 5,
    name: 'Walther Bradly',
    company: 'Viva',
    title: 'Scrum Master',
    connections: [3, 4],
  },
];

assert.equal(findMostCommonTitle(users, 4, 2), 'Scrum Master');
assert.equal(findMostCommonTitle(users, 1, 1), 'Software Engineer');
