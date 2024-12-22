/*
    given two sorted arrays you need to find union of two arrays
*/

const findUnion = (a, b) => {
  let i = 0;
  let j = 0;
  let union = new Array();

  while (i < a.length && j < b.length) {
    if (arr[i] <= arr[j]) {
      if (union.length === 0 || union[union.length - 1] !== a[i]) {
        union.push(a[i]);
      }
      i++;
    } else {
      if (union.length === 0 || union[union.length - 1] !== b[j]) {
        union.push(b[j]);
      }
      j++;
    }
  }

  while (i < a.length) {
    if (union.length === 0 || union[union.length - 1] !== a[i]) {
      union.push(a[i]);
    }
    i++;
  }

  while (j < b.length) {
    if (union.length === 0 || union[union.length - 1] !== b[j]) {
      union.push(b[j]);
    }
    j++;
  }

  return union;
};
