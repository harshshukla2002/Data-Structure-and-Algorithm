/*
    Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
        - Only numbers 1 through 9 are used.
        - Each number is used at most once.
    Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
*/

const combinationSum = (k, n) => {
  const result = [];

  const backTrack = (start, combination, rem) => {
    if (combination.length === k) {
      if (rem === 0) result.push([...combination]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      if (i > rem) break;

      combination.push(i);

      backTrack(i + 1, combination, rem - i);

      combination.pop();
    }
  };

  backTrack(1, [], n);
  return result;
};
