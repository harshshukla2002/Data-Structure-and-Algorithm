/*
    Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
*/

const searchElement = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (nums[mid] <= target && target <= nums[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return -1;
};
