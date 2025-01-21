/*
    Given an integer array nums and an integer k, return the number of good subarrays of nums.

    A good array is an array where the number of different integers in that array is exactly k.

    For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
    A subarray is a contiguous part of an array.
*/

const subarrayWithKIntegers = (nums: [], k: number): number => {
  return atMostK(nums, k) - atMostK(nums, k - 1);
};

const atMostK = (nums: [], k: number): number => {
  let left: number = 0;
  let count: number = 0;
  let freqMap = new Map();

  for (let right = 0; right < nums.length; right++) {
    freqMap.set(nums[right], (freqMap.get(nums[right]) || 0) + 1);

    while (freqMap.size > k) {
      freqMap.set(nums[left], freqMap.get(nums[left]) - 1);

      if (freqMap.get(nums[left]) === 0) freqMap.delete(nums[left]);
      left++;
    }

    count += right - left + 1;
  }

  return count;
};
