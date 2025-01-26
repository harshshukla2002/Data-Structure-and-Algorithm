/*
    Given a string s, you have to find the number of palindromic subsequences (need not necessarily be distinct) present in the string s. 
*/

const palindromicSubsequence = (str: string): number => {
  const n = str.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i <= n - len; i++) {
      const j = i + len - 1;
      if (str[i] === str[j]) {
        dp[i][j] = dp[i + 1][j] + dp[i][j - 1] + 1;
      } else {
        dp[i][j] = dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1];
      }
    }
  }

  return dp[0][n - 1];
};
