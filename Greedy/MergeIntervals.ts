/*
    Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
*/

type Intervals = [number, number];

const mergeIntervals = (intervals: Intervals[]): Intervals[] => {
  intervals.sort((a, b) => a[0] - b[0]);

  let result: Intervals[] = [];
  let currentInterval: Intervals = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let [currentStart, currentEnd] = currentInterval;
    let [nextStart, nextEnd] = intervals[i];

    if (nextStart <= currentEnd) {
      currentInterval[i] = Math.max(currentEnd, nextEnd);
    } else {
      result.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  result.push(currentInterval);

  return result;
};
