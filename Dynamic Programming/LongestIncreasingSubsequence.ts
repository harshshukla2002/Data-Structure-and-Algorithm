/*
    Given an integer array nums, return the length of the longest strictly increasing subsequence.
*/

const longestSubsequence = (nums: number[]): number => {
  let n = nums.length;
  let dp: number[] = new Array(n).fill(1);
  let maxLen: number = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }

    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
};
