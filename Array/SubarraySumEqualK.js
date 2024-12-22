/*
    Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
*/

const subarraySum = (arr, k) => {
  let count = 0;
  let sum = 0;
  const map = { 0: 1 };

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (map[sum - k] !== undefined) {
      count += map[sum - k];
    }

    map[sum] = (map[sum] || 0) + 1;
  }

  return count;
};
