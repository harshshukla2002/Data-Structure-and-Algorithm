/*
    Given a string s. In one step you can insert any character at any index of the string.

    Return the minimum number of steps to make s palindrome.

    A Palindrome String is one that reads the same backward as well as forward.
*/

const insertString = (str: string): number => {
  let n = str.length;
  let rev = str.split("").reverse().join("");
  let dp: number[] = new Array(n + 1).fill(0);
  let curr: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (str[i - 1] === rev[j - 1]) curr[j] = 1 + dp[j - 1];
      else curr[j] = Math.max(dp[j], curr[j - 1]);
    }

    dp = [...curr];
  }

  return n - dp[n];
};
