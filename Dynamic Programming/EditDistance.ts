/*
    Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

    You have the following three operations permitted on a word:

    - Insert a character
    - Delete a character
    - Replace a character
*/

const editDistance = (word1: string, word2: string): number => {
  let n = word1.length;
  let m = word2.length;

  let dp = new Array(m + 1).fill(0);

  for (let i = 0; i <= m; i++) dp[i] = i;

  for (let i = 1; i <= n; i++) {
    let curr = new Array(m + 1).fill(0);
    curr[0] = i;

    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) curr[j] = dp[j - 1];
      else curr[j] = 1 + Math.min(dp[j], dp[j - 1], curr[j - 1]);
    }

    dp = curr;
  }

  return dp[n];
};
