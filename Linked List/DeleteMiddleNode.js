/*
    You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
*/

function deleteNode(head) {
  if (!head || !head.next) {
    return null;
  }

  let fast = head;
  let slow = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next;

  return head;
}
