/*
    Given a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list.
*/

const countLength = (head) => {
  let current = head;
  let count = 0;

  while (current) {
    current = current.next;
    count++;
  }

  return count;
};
