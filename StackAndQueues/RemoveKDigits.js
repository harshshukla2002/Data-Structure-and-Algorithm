/*
    Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.
*/

const removeDigits = (num, k) => {
  const stack = [];

  for (let digit of num) {
    while (stack.length > 0 && k > 0 && digit < stack[stack.length - 1]) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  const result = stack.join("").replace(/^0+/, "");

  return result === 0 ? "" : result;
};
