/*
    Given a linked list of n nodes and a key, the task is to check if the key is present in the linked list or not.
*/

function searchElement(head, key) {
  let current = head;

  while (current) {
    if (current.value === key) {
      return true;
    }

    current = current.next;
  }

  return false;
}
