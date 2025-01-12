/*
    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

const generateParentheses = (n) => {
  const result = [];

  const backTrack = (current, open, close) => {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backTrack(current + "(", open + 1, close);
    }

    if (close < open) {
      backTrack(current + ")", open, close + 1);
    }
  };

  backTrack("", 0, 0);

  return result;
};
