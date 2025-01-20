/*
    Given a string s, find the length of the longest substring without repeating characters.
*/

const longestSubstring = (str: string) => {
  const set = new Set();
  let left: number = 0;
  let length: number = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    length = Math.max(length, right - left + 1);
  }

  return length;
};
