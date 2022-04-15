/*
  Flood Fill

  An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
  You are also given three integers sr, sc, and newColor.
  You should perform a flood fill on the image starting from the pixel image[sr][sc].

  Example:
  Input: [[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2
  Output: [[2,2,2],[2,2,0],[2,0,1]]
*/

function floodFill(image, sr, sc, newColor) {
  const color = image[sr][sc];

  if (color !== newColor) {
    traverse(image, sr, sc, color, newColor);
  }

  return image;
}

function traverse(image, sr, sc, color, newColor) {
  const rowInbound = sr >= 0 && sr < image.length;
  const colInbound = sc >= 0 && sc < image[0].length;

  if (!rowInbound || !colInbound) {
    return;
  }

  if (image[sr][sc] !== color) {
    return;
  }

  image[sr][sc] = newColor;

  traverse(image, sr + 1, sc, color, newColor);
  traverse(image, sr - 1, sc, color, newColor);
  traverse(image, sr, sc + 1, color, newColor);
  traverse(image, sr, sc - 1, color, newColor);
}

const assert = require('assert');
assert.deepEqual(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  ),
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]
);
