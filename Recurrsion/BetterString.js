/*
    Given a pair of strings of equal lengths, Geek wants to find the better string. The better string is the string having more number of distinct subsequences.
    If both the strings have equal count of distinct subsequence then return str1.
*/

const betterString = (str1, str2) => {
  const countDistint = (str) => {
    const n = str.length;
    let dp = new Array(n).fill(0);
    const last = {};

    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
      let char = str[i - 1];
      dp = dp[i - 1] * 2;

      if (last[char] !== undefined) {
        dp[i] -= dp[last[char] - 1];
      }

      last[char] = i;
    }

    return dp[n];
  };

  let count1 = countDistint(str1);
  let count2 = countDistint(str2);

  if (count1 > count2) {
    return str1;
  } else if (count2 > count1) {
    return str2;
  } else {
    return str1;
  }
};

console.log(betterString("gfg", "ggg"));
