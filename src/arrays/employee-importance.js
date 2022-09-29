/*
  Employee Importance

  You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs.
  You are given an array of employees employees where:
  - employees[i].id is the ID of the ith employee.
  - employees[i].importance is the importance value of the ith employee.
  - employees[i].subordinates is a list of the IDs of the direct subordinates of the ith employee.
  Given an integer id that represents an employee's ID, return the total importance value of this employee and all their direct and indirect subordinates.

  Example:
  Input: 
*/

function employeeImportance(employees, id) {
  const graph = buildGraph(employees);
  return getImportanceHelper(graph, id);
}

function getImportanceHelper(graph, id) {
  const { importance } = graph[id];

  return (
    graph[id].subordinates.reduce((acc, idx) => {
      let sum = 0;

      for (const subordinateIdx of graph[idx].subordinates) {
        sum += getImportanceHelper(graph, subordinateIdx);
      }

      return acc + graph[idx].importance + sum;
    }, 0) + importance
  );
}

function buildGraph(employees) {
  return employees.reduce((acc, employee) => {
    const { id, importance, subordinates } = employee;

    acc[id] = {
      importance,
      subordinates,
    };

    return acc;
  }, {});
}

const assert = require('assert');
const employees = [
  { id: 1, importance: 5, subordinates: [2, 3] },
  { id: 2, importance: 3, subordinates: [] },
  { id: 3, importance: 3, subordinates: [] },
];

assert.equal(employeeImportance(employees, 1), 11);
