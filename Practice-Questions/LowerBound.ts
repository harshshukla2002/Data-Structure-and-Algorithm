/*
    To check if k is present in a sorted array in O(log n) time, we use Binary Search. Find first occurence of k return index or -1
*/

const lowerBound = (n: number, k: number, arr: number[]): number => {
  let left = 0;
  let right = n - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === k) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < k) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};
