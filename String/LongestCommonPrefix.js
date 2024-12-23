/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".
*/

const longetCommonPrefix = (str) => {
  str.sort();

  let first = str[0];
  let last = str[str.length - 1];
  let i = 0;

  while (i < first.length && first[i] === last[i]) i++;

  return first.slice(0, i);
};
