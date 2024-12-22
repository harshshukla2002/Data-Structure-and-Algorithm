/*
    Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
*/

const longestConsequetiveSequence = (arr) => {
  let longest = 1;
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }

  for (let it of set) {
    if (!set.has(it - 1)) {
      let count = 1;
      let x = it;

      while (set.has(x + 1)) {
        x = x + 1;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;
};
