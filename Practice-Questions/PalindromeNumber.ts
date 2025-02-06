/*
    To check if a number is a palindrome, we need to reverse the digits and compare the reversed number with the original number.
*/

const palindromeNumber = (num: number): boolean => {
  let original = num;
  let revNum: number = 0;

  while (num > 0) {
    let digit = num % 10;
    revNum = revNum * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === revNum;
};
