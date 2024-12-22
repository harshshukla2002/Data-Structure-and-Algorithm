/*
    Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where the sum of its elements is equal to the given value k.
*/

const longestSubarray = (arr, k) => {
  let map = new Map();
  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) maxLength = i + 1;

    if (map.has(sum - k)) maxLength = Math.max(maxLength, i - map.get(cum - k));

    if (!map.has(sum)) map.set(sum, i);
  }

  return maxLength;
};
