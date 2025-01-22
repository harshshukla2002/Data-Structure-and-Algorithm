/*
    Given two arrays, val[] and wt[], representing the values and weights of items, and an integer capacity representing the maximum weight a knapsack can hold, determine the maximum total value that can be achieved by putting items in the knapsack. You are allowed to break items into fractions if necessary.
    Return the maximum value as a double, rounded to 6 decimal places.
*/

interface Items {
  value: number;
  weight: number;
  ratio: number;
}

const fractionalKnapsack = (val: [], wt: [], capacity: number): number => {
  let n: number = val.length;
  let items: Items[] = [];

  for (let i = 0; i < n; i++) {
    items.push({ value: val[i], weight: wt[i], ratio: val[i] / wt[i] });
  }

  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue: number = 0;
  let remCapacity: number = capacity;

  for (const item of items) {
    if (remCapacity === 0) break;

    if (item.weight <= remCapacity) {
      totalValue += item.value;
      remCapacity -= item.weight;
    } else {
      totalValue += item.ratio * remCapacity;
      remCapacity = 0;
    }
  }

  return totalValue;
};
