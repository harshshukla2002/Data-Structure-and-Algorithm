/*

Find the Second largest element in the array

*/

const secondLargest = (arr) => {
  let largest = -Infinity;
  let secLargest = -Infinity;

  for (let value of arr) {
    if (largest < value) {
      secLargest = largest;
      largest = value;
    } else if (value > secLargest && value < largest) {
      secLargest = value;
    }
  }

  return secLargest;
};
