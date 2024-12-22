/*
    Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 */

const majorityElements = (nums) => {
  let n = nums.length;
  let cnt1 = 0;
  let cnt2 = 0;
  let el1 = -Infinity;
  let el2 = -Infinity;

  for (let i = 0; i < n; i++) {
    if (cnt1 === 0 && el2 !== nums[i]) {
      cnt1 = 1;
      el1 = nums[i];
    } else if (cnt2 === 0 && el1 !== nums[i]) {
      cnt2 = 1;
      el2 = nums[i];
    } else if (el1 === nums[i]) {
      cnt1++;
    } else if (el2 === nums[i]) {
      cnt2++;
    } else {
      cnt1--;
      cnt2--;
    }
  }

  cnt1 = 0;
  cnt2 = 0;

  for (let i = 0; i < n; i++) {
    if (el1 === nums[i]) {
      cnt1++;
    }
    if (el2 === nums[i]) {
      cnt2++;
    }
  }

  let min = Math.floor(n / 3) + 1;
  let res = [];

  if (cnt1 >= min) {
    res.push(el1);
  }
  if (cnt2 >= min) {
    res.push(el2);
  }

  return res;
};
