/*
    Given an integer array height[] where height[i] represents the height of the i-th stair, a frog starts from the first stair and wants to reach the top. From any stair i, the frog has two options: it can either jump to the (i+2)th stair or the (i+2)th stair. The cost of a jump is the absolute difference in height between the two stairs. Determine the minimum total cost required for the frog to reach the top.
*/

const frogJump = (height: number[]): number => {
  let n: number = height.length;

  if (n === 1) return 0;
  if (n === 2) return Math.abs(height[1] - height[0]);

  let dp: number[] = new Array(n).fill(0);

  dp[0] = 0;
  dp[1] = Math.abs(height[1] - height[0]);

  for (let i = 2; i < n; i++) {
    let jumpOne: number = dp[i - 1] + Math.abs(height[i] - height[i - 1]);
    let jumpTwo: number = dp[i - 2] + Math.abs(height[i] - height[i - 2]);

    dp[i] = Math.min(jumpOne, jumpTwo);
  }

  return dp[n - 1];
};
