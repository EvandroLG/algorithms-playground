/*
  List Format

  Given a list of strings, implement a function listFormat that returns the items concatenated into a single string. A common use case would be in summarizing the reactions for social media posts.
  The function should support a few options as the second parameter:
  - sorted: Sorts the items by alphabetical order.
  - length: Show only the first length items, using "and X other(s)" for the remaining. Ignore invalid values (negative, 0, etc).
  - unique: Remove duplicate items.

  Example:
  Input: ['Bob', 'Ben', 'Tim', 'Jane', 'John'], { sorted: true, length: 3 }
  Output: 'Ben, Bob, Jane and 2 others'
*/

function listFormat(items, options) {
  let copy = items.slice().filter(Boolean);
  const sorted = !!options?.sorted;
  const size = options?.length > 0 ? options.length : items.length;
  const unique = !!options?.unique;

  if (sorted) {
    copy.sort((a, b) => a.localeCompare(b));
  }

  if (unique) {
    copy = Array.from(new Set(copy));
  }

  const total = copy.length;
  copy = copy.slice(0, size);

  return formatOutput(copy, total);
}

function formatOutput(arr, total) {
  const diff = total - arr.length;

  if (diff > 0) {
    return `${arr.join(', ')} and ${diff} ${diff > 1 ? 'others' : 'other'}`;
  }

  return arr
    .map((item, i) => {
      if (i === 0) {
        return item;
      }

      if (i === arr.length - 1) {
        return ` and ${item}`;
      }

      return `, ${item}`;
    })
    .join('');
}

const assert = require('assert');
assert.equal(
  listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], {
    sorted: true,
    length: 3,
  }),
  'Ben, Bob, Jane and 2 others'
);
