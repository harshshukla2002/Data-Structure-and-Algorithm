/*
    Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

    A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

    For example, "ace" is a subsequence of "abcde".
    A common subsequence of two strings is a subsequence that is common to both strings.
*/

const longestCommonSubsequence = (text1: string, text2: string): number => {
  let n = text1.length;
  let m = text2.length;

  let dp: number[] = new Array(m + 1).fill(0);
  let curr: number[] = new Array(m + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) curr[j] = 1 + dp[j - 1];
      else curr[j] = Math.max(dp[j], curr[j - 1]);
    }
    dp = [...curr];
  }

  return dp[m];
};
