/*
    Given an unsorted array arr[] of integers and an integer x, find the ceiling of x in arr[].

    Ceil of x is the smallest element which is greater than or equal to x.
*/

const upperBound = (arr, x) => {
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= x) {
      min = Math.min(min, arr[i]);
    }
  }

  return min === Infinity ? -1 : min;
};
