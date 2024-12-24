/*
    Given a string s, return the longest palindromic substring in s.
*/

const longestPalindromeSubstring = (s) => {
  if (s.length === 0) return "";

  let start = 0;
  let end = 0;

  const aroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left++;
      right--;
    }

    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    let len1 = aroundCenter(i, i);
    let len2 = aroundCenter(i, i + 1);

    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};
