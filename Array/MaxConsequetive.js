/*
    Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

const maxConsequetive = (nums) => {
  let count = 0;
  let max = 0;

  for (let value of nums) {
    if (value === 1) {
      count++;
    } else count = 0;

    if (max < count) max = count;
  }

  return max;
};
