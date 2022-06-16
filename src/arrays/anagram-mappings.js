/*
  Anagram Mappings

  You are given two integer arrays nums1 and nums2 where nums2 is an anagram of nums1.
  Both arrays may contain duplicates.
  Return an index mapping array mapping from nums1 to nums2 where mapping[i] = j means the ith element in nums1 appears in nums2 at index j.
  If there are multiple answers, return any of them.

  Example:
  Input: [12,28,46,32,50], [50,12,32,46,28]
  Output: [1,4,3,2,0]
*/

function anagramMappings(nums1, nums2) {
  const map = nums2.reduce((acc, item, idx) => {
    acc[item] = idx;
    return acc;
  }, {});

  return nums1.map((item) => map[item]);
}

const assert = require('assert');
assert.deepEqual(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]), [
  1,
  4,
  3,
  2,
  0,
]);
