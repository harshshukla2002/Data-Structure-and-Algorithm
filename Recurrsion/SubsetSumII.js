/*
    Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

    The solution set must not contain duplicate subsets. Return the solution in any order.
*/

const subsetSum = (nums) => {
  const result = [];

  nums.sort((a, b) => a - b);

  const backTrack = (index, subset) => {
    result.push([...subset]);

    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;

      subset.push(nums[i]);

      backTrack(i + 1, subset);

      subset.pop();
    }
  };

  backTrack(0, []);
  return result;
};
