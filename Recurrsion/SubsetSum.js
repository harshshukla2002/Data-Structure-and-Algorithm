/*
    Given a array arr of integers, return the sums of all subsets in the list.  Return the sums in any order.
*/

const subsetSum = (arr) => {
  const result = [];

  const backTrack = (index, sum) => {
    if (index === arr.length) {
      result.push(sum);
      return;
    }

    backTrack(index + 1, sum + arr[index]);

    backTrack(index + 1, sum);
  };

  backTrack(0, 0);
  return result;
};
