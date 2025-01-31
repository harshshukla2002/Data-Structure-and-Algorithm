/*
    You are given two strings s1 and s2. Your task is to find the length of the longest common substring among the given strings.
*/

const longestCommonSubstring = (s1: string, s2: string): number => {
  let n = s1.length;
  let m = s2.length;

  let dp: number[] = new Array(m + 1).fill(0);
  let curr: number[] = new Array(m + 1).fill(0);
  let maxLength: number = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        curr[j] = 1 + dp[j - 1];
        maxLength = Math.max(maxLength, curr[j]);
      } else {
        curr[j] = 0;
      }
    }

    dp = [...curr];
  }

  return maxLength;
};
