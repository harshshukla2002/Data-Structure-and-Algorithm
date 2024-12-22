/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 */

const searchElement = (nums, target) => {
  let mid = Math.floor(nums.length / 2);

  let l = target < nums[mid] ? 0 : mid + 1;
  let r = target < nums[mid] ? mid : n;

  while (l < r) {
    if (nums[l] === target) {
      return l;
    }
    l++;
  }

  return -1;
};
