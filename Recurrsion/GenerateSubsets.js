/*
    Given an integer array nums of unique elements, return all possible subsets (the power set).

    The solution set must not contain duplicate subsets. Return the solution in any order.
*/

const generateSubset = (nums) => {
  const result = [];

  const backTrack = (index, current) => {
    result.push([...current]);

    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);
      backTrack(i + 1, current);
      current.pop();
    }
  };

  backTrack(0, []);

  return result;
};
