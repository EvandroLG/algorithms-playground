/*
  Sort Stack

  Write a function that takes in an array of integers representing a stack, recursively sorts the stack in place (i.e., doesn't create a brand new array), and returns it.
  The array must be treated as a stack, with the end of the array as the top of the stack.
  Therefore, you're only allowed to:
  - Pop elements from the top of the stack by removing elements from the end of the array using the built-in .pop() method in your programming language of choice.
  - Push elements to the top of the stack by appending elements to the end of the array using the built-in .append() method in your programming language of choice.
  - Peek at the element on top of the stack by accessing the last element in the array.
  You're not allowed to perform any other operations on the input array, including accessing elements (except for the last element), moving elements, etc.. You're also not allowed to use any other data structures, and your solution must be recursive.

  Sample Input
  stack = [-5, 2, -2, 4, 3, 1]

  Sample Output
  [-5, -2, 1, 2, 3, 4]
*/

function insertStack(stack, value) {
  if (!stack.length || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }

  const top = stack.pop();
  insertStack(stack, value);
  stack.push(top);
}

function sortStack(stack) {
  if (!stack.length) {
    return stack;
  }

  const top = stack.pop();
  sortStack(stack);
  insertStack(stack, top);

  return stack;
}

const assert = require('assert');
assert.deepEqual(sortStack([-5, 2, -2, 4, 3, 1]), [-5, -2, 1, 2, 3, 4]);
