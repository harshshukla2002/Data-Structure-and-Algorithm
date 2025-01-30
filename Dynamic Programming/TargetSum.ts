/*
    You are given an integer array nums and an integer target.

    You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

    For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
    Return the number of different expressions that you can build, which evaluates to target.
*/

const targetSum = (nums: number[], target: number): number => {
  let totalSum = nums.reduce((a, b) => a + b, 0);

  if ((totalSum + target) % 2 !== 0 || totalSum < Math.abs(target)) return 0;

  let subsetSum = (totalSum + target) / 2;
  let dp = new Array(subsetSum + 1).fill(0);
  dp[0] = 1;

  for (let num of nums) {
    for (let i = subsetSum; i >= num; i++) {
      dp[i] += dp[i - num];
    }
  }

  return dp[subsetSum];
};
