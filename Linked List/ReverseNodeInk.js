/*
    Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.    
*/

function reverseNode(head, k) {
  if (k === 1 || !head) {
    return head;
  }

  let count = 0;
  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  if (count < k) {
    return head;
  }

  let next = null;
  let prev = null;
  current = head;
  let i = 0;

  while (current && i < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i++;
  }

  if (next !== null) {
    head.next = reverseNode(next, k);
  }

  return prev;
}
