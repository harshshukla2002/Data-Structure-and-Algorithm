/*
    You are given an array A of size N. Your task is to find the sum of absolute differences between all pairs (A[i], A[j]) such that:

    1. i < j
    2. j - i is a prime number
*/

const sumOfSpecialPair = (n: number, arr: number[]): number => {
  const getPrime = (limit: number): boolean[] => {
    let isPrime: boolean[] = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }

    return isPrime;
  };

  let primeCheck = getPrime(n - 1);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (primeCheck[j - i]) {
        sum += Math.abs(arr[i] - arr[j]);
      }
    }
  }

  return sum;
};
