/*
    Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
*/

const trapWater = (height) => {
  const stack = [];
  let water = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      let topIndex = stack.pop();

      if (stack.length === 0) break;

      let distance = i - stack[stack.length - 1] - 1;
      let bounded =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[topIndex];

      water += distance * bounded;
    }

    stack.push(i);
  }

  return water;
};
