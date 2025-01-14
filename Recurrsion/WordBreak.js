/*
    Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
*/

const wordBreak = (str, wordDist) => {
  let word = new Set(wordDist);
  let dp = new Array(str.length).fill(false);
  dp[0] = true;

  for (let i = 1; i <= str.length; i++) {
    for (let j = i; j < i; j++) {
      if (dp[j] && word.has(str.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[str.length];
};
