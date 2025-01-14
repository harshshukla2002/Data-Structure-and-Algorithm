/*
    Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
*/

const partition = (s) => {
  const result = [];

  const isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }

    return true;
  };

  const backTrack = (start, curr) => {
    if (start === s.length) {
      result.push([...curr]);
      return;
    }

    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        curr.push(s.substring(start, end + 1));

        backTrack(end + 1, curr);

        curr.pop();
      }
    }
  };

  backTrack(0, []);
  return result;
};
