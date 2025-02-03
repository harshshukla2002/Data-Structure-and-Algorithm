/*
    Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

    Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.
*/

const partitionArray = (arr: number[], k: number): number => {
  let n = arr.length;
  let dp: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let maxVal: number = 0;
    let bestSum: number = 0;

    for (let j = 1; j <= k && i - j >= 0; j++) {
      maxVal = Math.max(maxVal, arr[i - j]);
      bestSum = Math.max(bestSum, dp[i - j] + maxVal * j);
    }

    dp[i] = bestSum;
  }

  return dp[n];
};
