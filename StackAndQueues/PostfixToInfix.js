/*
    You are given a string that represents the postfix form of a valid mathematical expression. Convert it to its infix form.
*/

const postfixToInfix = (s) => {
  const stack = [];

  for (let char of s) {
    if (/[a-zA-Z0-9]/.test(char)) {
      stack.push(char);
    } else {
      let op1 = stack.pop();
      let op2 = stack.pop();
      let infix = `(${op2}${char}${op1})`;
      stack.push(infix);
    }
  }

  return stack.pop();
};
