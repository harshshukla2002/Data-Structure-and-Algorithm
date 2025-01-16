/*
    Given an infix expression in the form of string s. Convert this infix expression to a postfix expression.

     - Infix expression: The expression of the form a op b. When an operator is in between every pair of operands.
     - Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.
    
    Note: The order of precedence is: ^ greater than * equals to / greater than + equals to -. Ignore the right associativity of ^.
*/

const infixToPostfix = (s) => {
  let precedence = {
    "^": 3,
    "*": 2,
    "/": 2,
    "+": 1,
    "-": 1,
  };

  const isOperator = (c) => precedence.hasOwnProperty(c);
  let stack = [];
  let result = "";

  for (let char of s) {
    if (/[a-zA-Z0-9]/.test(char)) {
      result += char;
    } else if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      stack.pop();
    } else if (isOperator(char)) {
      while (
        stack.length > 0 &&
        isOperator(stack[stack.length - 1]) &&
        precedence[stack[stack.length - 1]] >= precedence[char]
      ) {
        result += stack.pop();
      }

      stack.push(char);
    }
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
};
