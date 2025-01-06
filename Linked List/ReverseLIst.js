/*
    Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

const reverseList = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
