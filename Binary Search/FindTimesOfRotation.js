/*
    Given an increasing sorted rotated array arr of distinct integers. The array is right-rotated k times. Find the value of k.
*/

const findRotation = (nums) => {
  let low = 0;
  let high = nums.length - 1;
  let index = -1;
  let ans = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[low] < nums[high]) {
      if (nums[low] < ans) {
        index = low;
        ans = nums[low];
      }
      break;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] < ans) {
        index = low;
        ans = nums[low];
      }
      low = mid + 1;
    } else {
      if (nums[mid] < ans) {
        index = mid;
        ans = nums[mid];
      }
      high = mid - 1;
    }
  }

  return index;
};
