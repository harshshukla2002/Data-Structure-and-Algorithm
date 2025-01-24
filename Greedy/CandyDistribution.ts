/*
    There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

    You are giving candies to these children subjected to the following requirements:

    - Each child must have at least one candy.
    - Children with a higher rating get more candies than their neighbors.

    Return the minimum number of candies you need to have to distribute the candies to the children.
*/

const distributeCandy = (ratings: number[]): number => {
  let n: number = ratings.length;

  if (n === 0) return 0;

  let candies: number[] = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) candies[i] = candies[i - 1] + 1;
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1])
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
  }

  return candies.reduce((a, b) => a + b, 0);
};
