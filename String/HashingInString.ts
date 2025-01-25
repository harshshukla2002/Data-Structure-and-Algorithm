/*
    Given two strings text and pattern, find the first index where pattern exactly matches with any substring of text. 

    Return -1 if pattern doesn't exist as a substring in text.
*/

const firstMatchingIndex = (text: string, pattern: string): number => {
  let textLength: number = text.length;
  let patternLength: number = pattern.length;

  for (let i = 0; i <= textLength - patternLength; i++) {
    let j = 0;

    while (j < patternLength && text[i + j] === pattern[j]) {
      j++;
    }

    if (j === patternLength) return i;
  }

  return -1;
};
