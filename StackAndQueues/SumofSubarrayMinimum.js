/*
    Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 1e9 + 7.
*/

const sumSubarrayMinimum = (arr) => {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const left = new Array(n).fill(0);
  const right = new Array(n).fill(0);
  let stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    result = (result + arr[i] * left[i] * right[i]) % MOD;
  }

  return result;
};
