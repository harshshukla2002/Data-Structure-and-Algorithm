/*
    There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.

    In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

    Your score is the sum of the points of the cards you have taken.

    Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
*/

const maxSum = (arr: [], k: number): number => {
  let n: number = arr.length;
  let totalSum: number = arr.reduce((sum, val) => (sum += val), 0);

  if (k === n) return totalSum;

  let windowSize: number = n - k;
  let currentSum: number = 0;

  for (let i = 0; i < windowSize; i++) {
    currentSum += arr[i];
  }

  let minSum: number = currentSum;

  for (let i = windowSize; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - windowSize];
    minSum = Math.min(minSum, currentSum);
  }

  return totalSum - minSum;
};
