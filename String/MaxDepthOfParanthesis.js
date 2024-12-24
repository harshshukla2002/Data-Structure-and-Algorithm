/*
    Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.
*/

const maxDepth = (s) => {
  let curr = 0;
  let max = 0;

  for (let char of s) {
    if (char === "(") {
      curr++;
      max = Math.max(max, curr);
    } else if (char === ")") curr--;
  }

  return max;
};
