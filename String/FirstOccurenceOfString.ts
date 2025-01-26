/*
    Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

const firstIndex = (haystack: string, needle: string): number => {
  if (needle === "") return 0;

  let haystackLength: number = haystack.length;
  let needleLength: number = needle.length;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    if (haystack.substring(i, i + needleLength) === needle) return i;
  }

  return -1;
};
