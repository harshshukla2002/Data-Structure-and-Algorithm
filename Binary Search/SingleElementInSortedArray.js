/*
    You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

    Return the single element that appears only once.
*/

const singleElement = (nums) => {
  let n = nums.length;

  if (n === 1) return nums[0];
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

  let low = 1;
  let high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
      return nums[mid];

    if (
      (mid % 2 === 1 && nums[mid] === nums[mid - 1]) ||
      (mid % 2 === 0 && nums[mid] === nums[mid + 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};
