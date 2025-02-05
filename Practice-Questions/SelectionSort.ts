/*
    Selection Sort is a simple sorting algorithm that repeatedly selects the smallest element from the unsorted part and places it at the beginning.
*/

const selectionSort = (arr: number[]): number[] => {
  let n: number = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex: number = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};
