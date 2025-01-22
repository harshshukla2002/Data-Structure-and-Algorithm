/*
    Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

    The following rules define a valid string:
    - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
    - Any right parenthesis ')' must have a corresponding left parenthesis '('.
    - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
    '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
*/

const validParanthesis = (str: string): boolean => {
  let low = 0;
  let high = 0;

  for (let char of str) {
    if (char === "(") {
      low++;
      high++;
    } else if (char === ")") {
      low = Math.max(low - 1, 0);
      high--;
    } else if (char === "*") {
      low = Math.max(low - 1, 0);
      high++;
    }

    if (high < 0) {
      return false;
    }
  }

  return low === 0;
};
