/*
    Given an array of coins[] of size n and a target value sum, where coins[i] represent the coins of different denominations. You have an infinite supply of each of the coins. The task is to find the minimum number of coins required to make the given value sum. If it’s not possible to make a change, return -1.
*/

const coinChange = (coins: [], targetSum: number) => {
  const memo = new Array(targetSum + 1).fill(Infinity);
  memo[0] = 0;

  for (let coin of coins) {
    for (let sum = coin; sum <= targetSum; sum++) {
      memo[sum] = Math.min(memo[sum], memo[sum - coin] + 1);
    }
  }

  return memo[targetSum] === Infinity ? -1 : memo[targetSum];
};
