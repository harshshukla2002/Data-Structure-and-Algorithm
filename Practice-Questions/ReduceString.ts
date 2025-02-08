/*
    You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

    For instance, the string aab could be shortened to b in one operation.

    Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

    example input - aaabccddd output - abd
*/

const reduceString = (str: string): string => {
  let stack: string[] = [];

  for (let char of str) {
    if (stack.length > 0 && stack[stack.length - 1] === char) stack.pop();
    else stack.push(char);
  }

  return stack.length === 0 ? "Empty String" : stack.join("");
};
