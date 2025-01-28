/*
    Given an array arr of non-negative integers and an integer target, the task is to count all subsets of the array whose sum is equal to the given target.
*/

const perfectSum = (arr: number[], target: number): number => {
  const memo = new Map();

  function Solution(index: number, remaining: number): number {
    if (remaining === 0) return 1;

    if (index === arr.length || remaining < 0) return 0;

    let key: string = `${index}-${remaining}`;

    if (memo.has(key)) return memo[key];

    const include: number = Solution(index + 1, remaining - arr[index]);
    const exclude: number = Solution(index + 1, remaining);

    const result: number = include + exclude;

    memo.set(key, result);

    return result;
  }

  return Solution(0, target);
};
