/*
    Given a rod of length n(size of price) inches and an array of prices, price. price[i] denotes the value of a piece of length i. Determine the maximum value obtainable by cutting up the rod and selling the pieces.
*/

const rodCutting = (prices: number[]): number => {
  let n: number = prices.length;
  let dp: number[] = new Array(n + 1).fill(0);

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= j; i++) {
      dp[j] = Math.max(dp[j], prices[i - 1] + dp[j - i]);
    }
  }

  return dp[n];
};
