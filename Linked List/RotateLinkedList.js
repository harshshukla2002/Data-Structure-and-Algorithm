/*
  Given the head of a linked list, rotate the list to the right by k places.
*/

function rotateLL(head, k) {
  if (!head || !head.next || k === 0) return head;

  let length = 1;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  k = k % length;

  if (k === 0) return head;

  tail.next = head;

  let stepsToNewTail = length - k;
  let newTail = head;

  for (let i = 1; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
}
