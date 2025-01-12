/*
    Given an integer, K. Generate all binary strings of size k without consecutive 1’s.
*/

const generateAllSubstring = (k, str, n) => {
  if (n === k) {
    str[n] = "\0";
    console.log(str.join("") + " ");
    return;
  }

  if (str[n - 1] === "1") {
    str[n] = "0";
    generateAllSubstring(k, str, n + 1);
  }

  if (str[n - 1] === "0") {
    str[n] = "0";
    generateAllSubstring(k, str, n + 1);
    str[n] = "1";
    generateAllSubstring(k, str, n + 1);
  }
};

const generateSubstring = (k) => {
  if (k <= 0) {
    return;
  }

  let str = new Array(k);

  str[0] = "0";
  generateAllSubstring(k, str, 1);

  str[0] = "1";
  generateAllSubstring(k, str, 1);
};
