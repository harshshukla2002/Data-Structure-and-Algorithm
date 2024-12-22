/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

function majorityElements(nums) {
  let count = 0;
  let val = nums[0];

  for (const value of nums) {
    if (val === value) count++;
    else count--;

    if (count === 0) {
      val = value;
      count = 1;
    }
  }

  count = 0;
  for (const value of arr) {
    if (val === value) count++;
  }

  return count > Math.floor(nums.length / 2) ? val : -1;
}
