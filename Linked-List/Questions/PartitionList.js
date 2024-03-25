class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length++;
  }

  partitionList(x) {
    if (!this.head || !this.head.next) return this.head;

    let lessThan = new Node(0);
    let lessThanPtr = lessThan;
    let greaterThan = new Node(0);
    let greaterThanPtr = greaterThan;

    let current = this.head;

    while (current) {
      if (current.value < x) {
        lessThanPtr.next = current;
        lessThanPtr = lessThanPtr.next;
      } else {
        greaterThanPtr.next = current;
        greaterThanPtr = greaterThanPtr.next;
      }

      current = current.next;
    }

    greaterThanPtr.next = null;
    lessThanPtr.next = greaterThanPtr.next;

    return lessThanPtr.next;
  }
}
