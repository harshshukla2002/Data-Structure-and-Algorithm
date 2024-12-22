/*
given the array in sorted and rotated at some point, check if array is sorted or rotated.
*/

const rotatedAndSorted = (arr) => {
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[(i + 1) % n]) {
      count++;
    }
  }

  return count <= 1;
};
