/*
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

    A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

const letterCombination = (digits) => {
  if (digits.length === 0) return [];

  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  const backTrack = (index, combination) => {
    if (combination.length === digits.length) {
      result.push(combination);
      return;
    }

    let letters = digitToLetters[digits[index]];

    for (const letter of letters) {
      backTrack(index + 1, combination + letter);
    }
  };

  backTrack(0, "");

  return result;
};
