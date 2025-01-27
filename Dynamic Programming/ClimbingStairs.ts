/*
    You are climbing a staircase. It takes n steps to reach the top.

    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const climbingStairs = (n: number): number => {
  if (n <= 1) return 1;

  let prev: number = 1;
  let result: number = 1;

  for (let i = 2; i <= n; i++) {
    let current = prev + result;
    prev = result;
    result = current;
  }

  return result;
};

// solution using dp
const climbingStairsDp = (n: number): number => {
  if (n <= 1) return 1;

  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
