/*
    Given an array arr[] of size n, where arr[i] denotes the height of ith stone. Geek starts from stone 0 and from stone i, he can jump to stones i + 1, i + 2, … i + k. The cost for jumping from stone i to stone j is abs(arr[i] – arr[j]). Find the minimum cost for Geek to reach the last stone.
*/

const minimumCost = (arr: number[], k: number): number => {
  let n: number = arr.length;
  let dp: number[] = new Array(n).fill(Infinity);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < Math.min(i + k, n - 1); j++) {
      dp[j] = Math.min(dp[j], dp[i] + Math.abs(arr[i] - arr[j]));
    }
  }

  return dp[n - 1];
};
