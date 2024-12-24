/*
    Given a string s of lowercase alphabets, count all possible substrings (not necessarily distinct) that have exactly k distinct characters. 
*/

const countSubstring = (s, k) => {
  let map1 = {},
    map2 = {};
  let count = 0;
  let left1 = 0,
    left2 = 0,
    dist1 = 0,
    dist2 = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    map1[char] = (map1[char] || 0) + 1;
    if (map1[char] === 1) dist1++;

    map2[char] = (map2[char] || 0) + 1;
    if (map2[char] === 1) dist2++;

    while (dist1 > k) {
      map1[s[left1]]--;
      if (map1[s[left1]] === 0) dist1--;
      left1++;
    }

    while (dist2 > k) {
      map2[s[left2]]--;
      if (map2[s[left2]] === 0) dist2--;
      left2++;
    }

    count += left2 - left1;
  }

  return count;
};
