/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
*/

const twoSum = (nums, target) => {
  const arr = nums.slice();
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  let num1 = 0;
  let num2 = 0;

  while (left <= right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      num1 = arr[left];
      num2 = arr[right];
      break;
    } else if (sum < target) left++;
    else right--;
  }

  const index1 = nums.indexOf(num1);
  const index2 = nums.lastIndexOf(num2);

  return [index1, index2];
};
