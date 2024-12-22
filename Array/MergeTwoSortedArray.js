/*
    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.
*/

const merge = (arr1, n, arr2, m) => {
  let i = n - 1;
  let j = m - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      i--;
    } else {
      arr1[k] = arr2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    arr1[k] = arr2[j];
    j--;
    k--;
  }
};
