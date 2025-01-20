/*
    Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
*/

const maxConsecutiveOnes = (nums: number[], k: number) => {
  let left: number = 0;
  let maxOnes: number = 0;
  let zeroCount: number = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxOnes = Math.max(maxOnes, right - left + 1);
  }

  return maxOnes;
};
