/*
  Top K Frequent Words

  Given an array of strings words and an integer k, return the k most frequent strings.
  Return the answer sorted by the frequency from highest to lowest.
  Sort the words with the same frequency by their lexicographical order.

  Example:
  Input: ["the","day","is","sunny","the","the","the","sunny","is","is"], 4
  Output: ["the","is","sunny","day"]
*/

function topKFrequentWords(words, k) {
  const counter = words.reduce((acc, word) => {
    if (!acc.hasOwnProperty(word)) {
      acc[word] = 0;
    }

    acc[word]++;

    return acc;
  }, {});

  const entries = Object.entries(counter);
  const sorted = entries.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }

    return b[1] - a[1];
  });

  return sorted.slice(0, k).map((entry) => entry[0]);
}

const assert = require('assert');
assert.deepEqual(
  topKFrequentWords(
    ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
    4
  ),
  ['the', 'is', 'sunny', 'day']
);
