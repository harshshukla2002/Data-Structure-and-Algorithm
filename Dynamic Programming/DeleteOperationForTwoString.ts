/*
    Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

    In one step, you can delete exactly one character in either string.
*/

const deleteOperation = (word1: string, word2: string): number => {
  let n = word1.length;
  let m = word2.length;

  let dp = new Array(m + 1).fill(0);
  let curr = new Array(m + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) curr[j] = 1 + dp[j - 1];
      else curr[j] = Math.max(dp[j], curr[j - 1]);
    }
    dp = [...curr];
  }

  return m + n - 2 * dp[m];
};
