/*
given an array and a variable d you have to rotate array by d places from start
*/

const rotateArray = (arr, d) => {
  let n = new Array();

  d = d % n;

  let temp = new Array(d);

  for (let i = 0; i < d; i++) temp[i] = nums[i];

  let l = 0;
  let r = d;

  while (r < n) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++;
    r++;
  }

  let j = 0;
  for (let i = n - d; i < n; i++) arr[i] = temp[j++];

  return arr;
};
