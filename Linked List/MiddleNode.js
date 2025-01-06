/*
    Given the head of a singly linked list, return the middle node of the linked list.
*/

const middleNode = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};
