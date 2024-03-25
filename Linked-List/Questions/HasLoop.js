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
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  hasLoop() {
    if (!this.head || !this.head.next) return false;

    let slowPtr = this.head;
    let fastPtr = this.head.next;

    while (slowPtr !== fastPtr) {
      if (!fastPtr || !fastPtr.next) return false;

      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;
    }

    return true;
  }
}
