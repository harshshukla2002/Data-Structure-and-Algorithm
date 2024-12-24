/*
    Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

    Return the sorted string. If there are multiple answers, return any of them.
*/

const sortCharacter = (s) => {
  let charMap = {};

  for (let char of s) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  const str = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);

  let result = "";

  for (let char of str) {
    result += char.repeat(charMap[char]);
  }

  return result;
};
