/*
    Given an array of positive integers arr[] and a value target, determine if there is a subset of the given array with sum equal to given target. 
*/

const subsetProblem = (arr: number[], target: number): boolean => {
  let dp: boolean[] = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let num of arr) {
    for (let j = target; j >= num; j--) {
      dp[j] = dp[j] || dp[j - num];
    }
  }

  return dp[target];
};
