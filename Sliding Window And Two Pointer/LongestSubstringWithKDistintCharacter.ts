/*
    Given a string s and an integer k, find the length of the longest substring of s that contains at most k distinct characters. If there are fewer than k distinct characters in the string, return the length of the entire string.
*/

const longestSubstring = (str: string, k: number): number => {
  if (k === 0 && str.length === 0) return 0;

  let left: number = 0;
  let maxLength: number = 0;
  let char = new Map();

  for (let right = 0; right < str.length; right++) {
    char.set(str[right], (char.get(str[right]) || 0) + 1);

    while (char.size > k) {
      char.set(str[left], char.get(str[left]) - 1);

      if (char.get(str[left]) === 0) {
        char.delete(str[left]);
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
