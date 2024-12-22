/* 
 given an array you have to rotate this from k places
*/

const rotatedArray = (nums, k) => {
  let n = nums.length;
  k = k % n;
  let temp = new Array(k);

  for (let i = 0; i < k; i++) {
    temp[i] = nums[n - k + i];
  }

  for (let i = n - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }

  for (let i = 0; i < k; i++) {
    nums[i] = temp[i];
  }

  return nums;
};
