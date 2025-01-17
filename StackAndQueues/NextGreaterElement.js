/*
    The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

    You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

    For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

    Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/

const nextGreaterElement = (nums1, nums2) => {
  const stack = [];
  let map = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    let num = nums2[i];

    while (stack.length > 0 && stack[stack.length - 1] <= num) {
      stack.pop();
    }

    map.set(num, stack.length > 0 ? stack[stack.length - 1] : -1);

    stack.push(num);
  }

  const result = nums1.map((num) => map.get(num));

  return result;
};
