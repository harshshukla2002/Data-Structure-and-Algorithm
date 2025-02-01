/*
    Given two strings s and t, return the number of distinct subsequences of s which equals t.

    The test cases are generated so that the answer fits on a 32-bit signed integer.
*/

const distinctSubsequence = (s: string, t: string): number => {
  let n = s.length;
  let m = t.length;

  let dp = new Array(m + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    let curr = new Array(m + 1).fill(0);
    curr[0] = 1;
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === t[j - 1]) curr[j] = dp[j - 1] + dp[j];
      else curr[j] = dp[j];
    }

    dp = curr;
  }

  return dp[m];
};
