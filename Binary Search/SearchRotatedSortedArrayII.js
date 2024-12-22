/*
    Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

    note - might be element are same
*/

const searchElement = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return true;

    if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else {
      if (nums[mid] <= target && target <= nums[high]) low = mid + 1;
      else high = mid - 1;
    }
  }

  return false;
};
