/*
    You are given the arrival times arr[] and departure times dep[] of all trains that arrive at a railway station on the same day. Your task is to determine the minimum number of platforms required at the station to ensure that no train is kept waiting.

    At any given time, the same platform cannot be used for both the arrival of one train and the departure of another. Therefore, when two trains arrive at the same time, or when one arrives before another departs, additional platforms are required to accommodate both trains.
*/

const minimumPlatform = (arr: number[], dep: number[]): number => {
  let maxPlatform: number = 0;
  let platformNeeded: number = 0;
  let i = 0,
    j = 0;

  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  while (i < arr.length && j < dep.length) {
    if (arr[i] <= dep[j]) {
      platformNeeded++;
      maxPlatform = Math.max(maxPlatform, platformNeeded);
      i++;
    } else {
      platformNeeded--;
      j++;
    }
  }

  return maxPlatform;
};
