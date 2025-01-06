/*
  Given the head of a linked list, determine whether the list contains a loop. If a loop is present, return the number of nodes in the loop, otherwise return 0.  
*/

function countNodesInLoop(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      return countNodes(slow);
    }
  }

  return 0;
}

function countNodes(head) {
  let count = 1;
  let current = head;

  while (current.next !== head) {
    count++;
    current = current.next;
  }

  return count;
}
