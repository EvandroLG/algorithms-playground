/*
  Memory Leak

  You are given two integers memory1 and memory2 representing the available memory in bits on two memory sticks.
  There is currently a faulty program running that consumes an increasing amount of memory every second.
  At the ith second (starting from 1), i bits of memory are allocated to the stick with more available memory
  If neither stick has at least i bits of available memory, the program crashes.
  Return an array containing [crashTime, memory1crash, memory2crash], where crashTime is the time (in seconds) when the program crashed and memory1crash and memory2crash are the available bits of memory in the first and second sticks respectively.

  Example:
  Input: 2, 2
  Output: [3, 1, 0]
*/

function memoryLeak(memory1, memory2) {
  let bits = 1;
  let hasCrashed = false;
  const output = [bits, memory1, memory2];

  while (true) {
    if (memory1 >= memory2) {
      if (memory1 - bits < 0) {
        hasCrashed = true;
      } else {
        memory1 = memory1 - bits;
      }
    } else {
      if (memory2 - bits < 0) {
        hasCrashed = true;
      } else {
        memory2 = memory2 - bits;
      }
    }

    bits++;

    if (hasCrashed) {
      break;
    }

    output[0] = bits;
    output[1] = memory1;
    output[2] = memory2;
  }

  return output;
}

const assert = require('assert');
assert.deepEqual(memoryLeak(2, 2), [3, 1, 0]);
