/*
    Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

    Return the number of nice sub-arrays.
*/

const countNumber = (nums: number[], k: number) => {
  let count: number = 0;
  let left: number = 0;
  let oddCount: number = 0;
  let prefix: number = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 !== 0) {
      oddCount++;
      prefix = 0;
    }

    while (oddCount === k) {
      if (nums[left] % 2 !== 0) {
        oddCount--;
      }
      prefix++;
      left++;
    }

    count += prefix;
  }

  return prefix;
};
