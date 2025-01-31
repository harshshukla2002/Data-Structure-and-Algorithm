/*
    Given a string s, find the longest palindromic subsequence's length in s.

    A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
*/

const longestPalindromicSubsequence = (str: string): number => {
  let n = str.length;
  let dp: number[] = new Array(n + 1).fill(0);
  let curr: number[] = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i++) {
    curr[i] = 1;
    for (let j = i + 1; j <= n; j++) {
      if (str[i] === str[j]) curr[j] = 2 + dp[j - 1];
      else curr[j] = Math.max(dp[j], curr[j - 1]);
    }

    dp = [...curr];
  }

  return dp[n - 1];
};
