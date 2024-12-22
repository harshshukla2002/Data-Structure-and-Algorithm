/*
    Given an integer array nums, find the subarray with the largest sum, and return its sum.
*/

function maximumSubarray(nums) {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    max = Math.max(max, sum);

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

/*
    follow up - also give the subarray which has that sum
*/

const maximumSubarrayWithArray = (nums) => {
  let max = -Infinity;
  let sum = 0;

  let start = 0;
  let ansStart = -1;
  let ansEnd = -1;

  for (let i = 0; i < nums.length; i++) {
    if (sum === 0) {
      start = i;
    }

    sum += nums[i];

    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  const res = [];

  for (let i = ansStart; i <= ansEnd; i++) {
    res.push(nums[i]);
  }

  return res;
};

/*
  Given an array of integers arr[]  and a number k. Return the maximum sum of a subarray of size k. 
*/

const maximumSubarrayofK = (nums, k) => {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < k; i++) sum += nums[i];

  max = sum;

  for (let i = k; i < nums.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }

  return max;
};
