/*
  Text Search

  In browsers, we are able to find specific words or phrases within a webpage by using Ctrl + F (Windows, Linux) or ⌘ + F (Mac) and entering the search term. Matches which appear will be highlighted in yellow.
  Let's implement a simple version of a browser's in-webpage search with the difference being we're given a string (as opposed to HTML) and search matches appear bolded.
  Given a content string and a query string, implement a function textSearch that finds all case-insensitive matches with the query string, wrapping the matches in <b>...</b> tags.

  Example:
  Input: 'The Quick Brown Fox Jumps Over The Lazy Dog', 'fox'
  Output: 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
*/

function textSearch(text, query) {
  if (!query) {
    return text;
  }

  let output = [];
  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (text[i].toLowerCase() === query[j].toLowerCase()) {
      let match = true;
      const arr = [];

      while (j < query.length && match) {
        if (text[i]?.toLowerCase() === query[j].toLowerCase()) {
          arr.push(text[i]);
          i++;
          j++;
        } else {
          match = false;
        }
      }

      if (match) {
        output.push(`<b>${arr.join('')}</b>`);
      } else {
        output.push(arr.join(''));
      }

      j = 0;
    } else {
      output.push(text[i]);
      i++;
    }
  }

  return normalize(output);
}

function normalize(arr) {
  let p1 = 0;
  let p2 = 1;

  while (p2 < arr.length) {
    if (arr[p1].includes('<b>') && arr[p2].includes('<b>')) {
      arr[p1] = arr[p1].slice(0, -4);
      arr[p2] = arr[p2].slice(3);
      p2++;
    } else {
      p1++;
      p2++;
    }
  }

  return arr.join('');
}

const assert = require('assert');
assert.equal(
  textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox'),
  'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
);
