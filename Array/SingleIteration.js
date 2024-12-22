/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
*/

const singleIteration = (nums) => {
  let num = nums[0];

  for (let i = 1; i < nums.length; i++) {
    num ^= nums[i];
  }

  return num;
};
