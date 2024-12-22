/*
    Given an array arr containing both positive and negative integers, the task is to compute the length of the largest subarray that has a sum of 0.
*/

const largestSubarray = (nums) => {
  let max = 0;
  let sum = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === 0) {
      max = i + 1;
    } else {
      if (map.has(sum)) {
        max = Math.max(max, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  }

  return max;
};
