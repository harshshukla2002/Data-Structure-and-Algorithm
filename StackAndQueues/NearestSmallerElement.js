/*
    Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

    More formally,

        G[i] for an element A[i] = an element A[j] such that 
        j is maximum possible AND 
        j < i AND
        A[j] < A[i]
    Elements for which no smaller element exist, consider next smaller element as -1.
*/

const nearestSmallerElement = (arr) => {
  let n = arr.length;
  let stack = [];
  let result = new Array(n).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = arr[stack[stack.length - 1]];
    }

    stack.push(i);
  }

  return result;
};
