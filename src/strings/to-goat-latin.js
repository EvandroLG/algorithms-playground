/*
  To Goat Latin

  You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.
  We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:
  - If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
  - If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
  - Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
  Return the final sentence representing the conversion from sentence to Goat Latin.

  Example:
  Input: "I speak Goat Latin"
  Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
*/

function toGoatLatin(sentence) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const words = sentence.split(' ');
  const output = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const end = 'a'.repeat(i + 1);

    if (vowels.has(word[0].toLowerCase())) {
      output.push(`${word}ma${end}`);
    } else {
      const firstLetter = word[0];
      const concat = `${word.slice(1)}${firstLetter}ma${end}`;
      output.push(concat);
    }
  }

  return output.join(' ');
}

const assert = require('assert');
assert.equal(
  toGoatLatin('I speak Goat Latin'),
  'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'
);
