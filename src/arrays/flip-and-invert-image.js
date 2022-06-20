/*
  Flip And Invert Image

  Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

  Example:
  Input: [[1,1,0],[1,0,1],[0,0,0]]
  Output: [[1,0,0],[0,1,0],[1,1,1]]
*/

function flipAndInvertImage(image) {
  return image.map((row) => row.reverse().map((pixel) => (pixel ? 0 : 1)));
}

const assert = require('assert');
assert.deepEqual(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ]),
  [
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ]
);
