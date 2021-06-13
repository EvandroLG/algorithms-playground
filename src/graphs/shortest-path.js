/*
  Shortest Path

  Given a graph of users and their connections, find the smallest distance between two users.

  Input:
             Dan
           /  |  \
       Juan Julia Mary
         |    |
       Roger Icard
       /    \
      Erick  Evander

  users: Dan and Erick

  Output:
  ['Dan', 'Juan', 'Roger', 'Erick']
*/

function getPath(visited, userA, userB) {
  let current = userB;
  const path = [];

  while (current) {
    path.push(current);
    current = visited[current.value];
  }

  return path.reverse().map((node) => node.value);
}

function shortestPath(userA, userB) {
  const queue = [userA];
  const visited = {
    [userA.value]: null,
  };

  while (queue.length) {
    const node = queue.shift();

    if (node === userB) {
      return getPath(visited, userA, userB);
    }

    for (const edge of node.edges) {
      if (!visited.hasOwnProperty(edge.value)) {
        visited[edge.value] = node;
        queue.push(edge);
      }
    }
  }

  return null;
}

const assert = require('assert');
const { Node, Graph } = require('./graph');

const Dan = new Node('Dan');
const Juan = new Node('Juan');
const Julia = new Node('Julia');
const Mary = new Node('Mary');
const Roger = new Node('Roger');
const Icard = new Node('Icard');
const Erick = new Node('Erick');
const Evander = new Node('Evander');

Dan.connect(Juan);
Dan.connect(Julia);
Dan.connect(Mary);

Juan.connect(Roger);
Roger.connect(Erick);
Roger.connect(Evander);

Julia.connect(Icard);

assert.deepEqual(shortestPath(Dan, Erick), ['Dan', 'Juan', 'Roger', 'Erick']);
