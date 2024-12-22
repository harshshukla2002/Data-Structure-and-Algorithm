/*
Given a sorted array arr[] (with unique elements) and an integer k, find the index (0-based) of the largest element in arr[] that is less than or equal to k. This element is called the "floor" of k. If such an element does not exist, return -1.
*/

const lowerBound = (arr, k) => {
  let max = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < k) {
      max = Math.max(max, arr[i]);
    } else break;
  }

  return max === -1 ? -1 : arr.indexOf(max);
};
