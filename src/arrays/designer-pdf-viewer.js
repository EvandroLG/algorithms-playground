/*
  Designer Pdf Viewer

  When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently.

  Example:
  Input: [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'
  Output: 28
*/

function designerPdfViewer(arr, word) {
  let tallest = -1;

  for (const c of word) {
    const idx = c.charCodeAt(0) - 97;
    const height = arr[idx];
    tallest = Math.max(height, tallest);
  }

  return tallest * word.length;
}

const assert = require('assert');
assert.strictEqual(
  designerPdfViewer(
    [
      1,
      3,
      1,
      3,
      1,
      4,
      1,
      3,
      2,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      7,
    ],
    'zaba'
  ),
  28
);
