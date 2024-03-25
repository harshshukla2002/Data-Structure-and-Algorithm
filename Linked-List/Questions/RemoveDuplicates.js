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

  removeDuplicates() {
    if (!this.head || !this.head.next) return this.head;

    let value = new Set();
    let previous = null;
    let current = this.head;

    while (current) {
      if (value.has(current.value)) {
        previous.next = current.next;
        this.length -= 1;
      } else {
        value.add(current.value);
        previous = current;
      }

      current = current.next;
    }

    return previous;
  }
}
