/*
     Given the head of a Singly Linked List and a value x, delete that value x from the LinkedList and return the modified Linked List.
*/

const deleteNode = (head, x) => {
  if (!head) return null;

  if (head.value === x) {
    return head.next;
  }

  let current = head;

  while (current.next && current.next.value !== x) {
    current = current.next;
  }

  if (current.next && current.next.value === x) {
    current.next = current.next.next;
  }

  return head;
};

/*
    follow-up question

    Given a singly linked list and an integer, x. Delete the xth node (1-based indexing) from the singly linked list.
*/

const deleteNode2 = (head, x) => {
  if (!head) {
    return null;
  }

  if (x === 1) {
    return head.next;
  }

  let current = head;
  let count = 1;

  while (current && count < x - 1) {
    current = current.next;
    count++;
  }

  if (!current && !current.next) {
    return head;
  }

  current.next = current.next.next;

  return head;
};
