/*
    You are given a stack St. You have to reverse the stack using recursion.
*/

const reverse = (stack) => {
  if (stack.length === 0) return;

  let temp = stack.pop();

  reverse(stack);

  insertAtBotttom(stack, temp);
};

const insertAtBotttom = (stack, el) => {
  if (stack.length === 0) {
    stack.push(el);
    return;
  }

  let temp = stack.pop();
  insertAtBotttom(stack, el);

  stack.push(temp);
};
