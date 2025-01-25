/*
    Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

    Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".
*/

const repeatedStringMatch = (a: string, b: string): number => {
  let repeated: string = a;
  let count: number = 0;

  while (repeated.length < b.length) {
    repeated += a;
    count++;
  }

  if (repeated.includes(b)) return count;

  repeated += a;
  count++;

  if (repeated.includes(b)) return count;

  return -1;
};
