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

  findKthFromEnd(k) {
    if (!this.head || k <= 0) return null;

    let slowPtr = this.head;
    let fastPtr = this.head;

    for (let i = 0; i < k; i++) {
      if (!fastPtr) return null;

      fastPtr = fastPtr.next;
    }

    while (fastPtr) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
    }

    return slowPtr;
  }
}
