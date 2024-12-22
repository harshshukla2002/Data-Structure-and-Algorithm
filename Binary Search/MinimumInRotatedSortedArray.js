/*
    Given the sorted rotated array nums of unique elements, return the minimum element of this array.
*/

const searchMinimum = () => {
  let low = 0;
  let high = 0;
  let ans = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[low] <= arr[high]) {
      ans = Math.min(ans, arr[low]);
      break;
    }

    if (arr[low] <= arr[mid]) {
      ans = Math.min(ans, arr[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[high]);
      high = mid - 1;
    }
  }

  return ans;
};
