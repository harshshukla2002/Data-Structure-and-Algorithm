/*
    Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

    Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.
*/

type Intervals = [number, number];

const nonOverlapingIntervals = (intervals: Intervals[]): number => {
  intervals.sort((a, b) => a[1] - b[1]);

  let prevEnd: number = -Infinity;
  let count: number = 0;

  for (let [start, end] of intervals) {
    if (start >= prevEnd) prevEnd = end;
    else count++;
  }

  return count;
};
