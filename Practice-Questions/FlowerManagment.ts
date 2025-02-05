/*
    We need to check if n new flowers can be planted in a flowerbed (represented as an array of 0s and 1s) while following the non-adjacent planting rule.
*/

const canPlanted = (n: number, target: number, flowers: number[]): boolean => {
  let count: number = 0;

  for (let i = 0; i < n; i++) {
    if (
      flowers[i] === 0 &&
      (i === 0 || flowers[i - 1] === 0) &&
      (i === n - 1 || flowers[i + 1] === 0)
    ) {
      flowers[i] = 1;
      count++;

      if (count === target) return true;
    }
  }

  return count >= target;
};
