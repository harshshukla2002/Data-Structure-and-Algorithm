/*
    Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
*/

const partitionSum = (nums: number[]): boolean => {
  let totalSum: number = nums.reduce((sum, num) => sum + num, 0);

  if (totalSum % 2 !== 0) return false;

  let target: number = totalSum / 2;

  let dp: boolean[] = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of nums) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[target];
};
