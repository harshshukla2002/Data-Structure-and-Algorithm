/*
    You are given a string s. Your task is to find the length of the smallest substring that contains all distinct characters of s at least once.
*/

const smallestLength = (str: string): number => {
  let uniqueChars = new Set(str);
  let requiredCount = uniqueChars.size;

  let left: number = 0;
  let charMap = new Map();
  let minLength: number = Infinity;
  let matched: number = 0;

  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];

    charMap.set(right, (charMap.get(rightChar) || 0) + 1);

    if (charMap.get(rightChar) === 1) matched++;

    while (matched === requiredCount) {
      minLength = Math.min(minLength, right - left + 1);

      let leftChar = str[left];
      charMap.set(leftChar, charMap.get(leftChar) - 1);

      if (charMap.get(leftChar) === 0) matched--;

      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
