/*
    given an array you need to find mising number in it
*/

const missingNumber = (nums) => {
  let n = nums.length;

  let total = (n * (n + 1)) / 2;

  let sum = 0;

  for (let value of nums) {
    sum += value;
  }

  return total - sum;
};
