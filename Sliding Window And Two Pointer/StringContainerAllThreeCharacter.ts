/*
    Given a string s consisting only of characters a, b and c.

    Return the number of substrings containing at least one occurrence of all these characters a, b and c.
*/

const containsCharacter = (str: string): number => {
  const letter = { a: 0, b: 0, c: 0 };
  let left: number = 0;
  let result: number = 0;

  for (let right = 0; right < str.length; right++) {
    letter[str[right]]++;

    while (letter["a"] > 0 && letter["b"] > 0 && letter["c"] > 0) {
      result += str.length - right;

      letter[str[left]]--;
      left++;
    }
  }

  return result;
};
