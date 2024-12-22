/*
    Given an integer array nums, find a subarray that has the largest product, and return the product.
*/

const maximumProdSubarray = (nums) => {
  let prod1 = nums[0];
  let prod2 = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
    prod1 = temp;

    result = Math.max(result, prod1);
  }

  return result;
};
