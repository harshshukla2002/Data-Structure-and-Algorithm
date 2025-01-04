/*
    Given the head of a Singly Linked List and a value x, insert that value x at the end of the LinkedList and return the modified Linked List.
*/

class LinkedList {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

const InsertNode = (head, x) => {
  if (!head) return new LinkedList(x);

  let current = head;

  while (current.next) {
    current = current.next;
  }

  current.next = new LinkedList(x);

  return head;
};
