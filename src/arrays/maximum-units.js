/*
  Maximum Units

  You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

  - numberOfBoxesi is the number of boxes of type i.
  - numberOfUnitsPerBoxi is the number of units in each box of the type i.

  You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
  Return the maximum total number of units that can be put on the truck.

  Example:
  Input: [[1,3],[2,2],[3,1]], 4
  Output: 8
*/

function maximumUnits(boxTypes, truckSize) {
  const sorted = boxTypes.slice().sort((a, b) => b[1] - a[1]);
  let size = truckSize;

  return sorted.reduce((acc, pair) => {
    let [numberOfBoxes, numberOfUnitsPerBox] = pair;
    let total = acc;

    while (numberOfBoxes && size) {
      total += numberOfUnitsPerBox;
      numberOfBoxes--;
      size--;
    }

    return total;
  }, 0);
}

const assert = require('assert');
assert.equal(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  ),
  8
);
