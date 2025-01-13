/*
    Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

    Each number in candidates may only be used once in the combination.
*/

const combinationSum = (candidates, target) => {
  const result = [];

  candidates.sort((a, b) => a - b);

  const backTrack = (rem, combination, index) => {
    if (rem === 0) {
      result.push([...combination]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      const candidate = candidates[i];

      if (i > index && candidates[i] === candidates[i - 1]) continue;

      if (candidate > rem) break;

      combination.push(candidate);

      backTrack(rem - candidate, combination, i);

      combination.pop();
    }
  };

  backTrack(target, [], 0);
  return result;
};
