/*
    Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

    The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.
*/

const nextGreaterElement = (nums) => {
  let n = nums.length;
  const stack = [];
  let result = new Array(n).fill(-1);

  for (let i = 0; i < 2 * n; i++) {
    let index = i % n;

    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[index]) {
      let topIndex = stack.pop();
      result[topIndex] = nums[index];
    }

    if (i < n) stack.push(index);
  }

  return result;
};
