/*
  given an array move all the zeros to the end
*/

const moveZeros = (nums) => {
  let n = nums.length;
  let temp = new Array();

  let index = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) temp[index++] = nums[i];
  }

  for (let i = 0; i < temp.length; i++) nums[i] = temp[i];

  for (let i = temp.length; i < n; i++) nums[i] = 0;

  return nums;
};
