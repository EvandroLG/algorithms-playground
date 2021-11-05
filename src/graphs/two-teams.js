/*
  Two Teams

  You are tasked splitting the 7th grade class into two teams for a soccer game.
  Given a list of students and their "enemies" aka the kids they can not be on the same team as,
  determined weather it is possible to split the class in two in such a way that no child is on the same team
  as of their enemies. If possible, return the two teams.

  Example:
  Input:
  {
    David: [Lucy, Jose, Chris],
    Lucy: [David, Brian, Emily],
    Emily: [Lucy, Jack],
    Jose: [David, Paul],
    Paul: [Jose, Chris],
    Chris: [Paul, David, Brian],
    Brian: [Lucy, Chris, Jack],
    Jack: [Brian, Emily]
  }

  Output:
  [
    ['Jack', 'Lucy', 'Jose', 'Chris'],
    ['Emily', 'David', 'Brian', 'Paul'],
  ]
*/

function assignLegalColoring(graph, student, visited) {
  visited.add(student);
  const node = graph[student];

  if (!node.color) {
    node.color = 'red';
  }

  for (const enemy of node.enemies) {
    if (!visited.has(enemy)) {
      graph[enemy].color = node.color === 'red' ? 'blue' : 'red';

      if (!assignLegalColoring(graph, enemy, visited)) {
        return false;
      }
    } else if (node.color === enemy.color) {
      return false;
    }
  }

  return true;
}

function buildGraph(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = {
      color: '',
      enemies: obj[key],
    };

    return acc;
  }, {});
}

function twoTeams(obj) {
  const graph = buildGraph(obj);
  const students = Object.keys(obj);
  const visited = new Set();

  for (const student of students) {
    if (visited.has(student)) {
      continue;
    }

    if (!assignLegalColoring(graph, student, visited)) {
      return null;
    }
  }

  const red = students.filter((student) => graph[student].color === 'red');
  const blue = students.filter((student) => graph[student].color === 'blue');

  return [red, blue];
}

const assert = require('assert');

const students = {
  David: ['Lucy', 'Jose', 'Chris'],
  Lucy: ['David', 'Brian', 'Emily'],
  Emily: ['Lucy', 'Jack'],
  Jose: ['David', 'Paul'],
  Paul: ['Jose', 'Chris'],
  Chris: ['Paul', 'David', 'Brian'],
  Brian: ['Lucy', 'Chris', 'Jack'],
  Jack: ['Brian', 'Emily'],
};

assert.deepEqual(twoTeams(students), [
  ['David', 'Emily', 'Paul', 'Brian'],
  ['Lucy', 'Jose', 'Chris', 'Jack'],
]);
