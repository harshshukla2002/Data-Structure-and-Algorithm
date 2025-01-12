/*
    Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*/

const pow = (x, n) => {
  function power(base, exp) {
    if (exp === 0) return 1;

    let half = power(base, Math.floor(exp / 2));

    if (exp % 2 === 0) half * half;
    else half * half * base;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  return power(x, n);
};
