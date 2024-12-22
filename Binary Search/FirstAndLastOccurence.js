/*
    Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

    If target is not found in the array, return [-1, -1].
*/

const findOccurence = (nums, target) => {
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      first = i;
      break;
    }
  }

  for (let i = nums.length - 1; i >= first; i++) {
    if (nums[i] === target) {
      last = i;
      break;
    }
  }

  return [first, last];
};
