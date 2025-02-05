/*
    Given an array arr[] of non-negative integers, where each element arr[i] represents the height of the vertical lines, find the maximum amount of water that can be contained between any two lines, together with the x-axis.
*/

const mostWater = (height: number[]) => {
  let n = height.length;
  let water: number = 0;
  let left: number = 0;
  let right: number = n - 1;

  while (left < right) {
    let temp = Math.min(height[left], height[right]) * (right - left);
    water = Math.max(water, temp);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return water;
};
