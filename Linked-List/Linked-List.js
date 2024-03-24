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
  pop() {
    if (!this.head) return undefined;

    let pre = this.head;
    let temp = this.tail;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) this.tail = null;

    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length || !index) return undefined;

    let temp = this.head;

    for (let i = 0; i < index; i++) temp = temp.next;

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);

    if (!temp) return false;

    temp.value = value;

    return true;
  }

  insert(index, value) {
    if (index < 0 && index > this.length) return false;
    if (index === this.length - 1) return this.push(value);
    if (index === 0) return this.unShift(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 && index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let before = this.get(index - 1);
    let temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.tail = this.head;
    this.tail = temp;
    let next = temp.next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}

const myLinkedList = new LinkedList(1);

console.log(myLinkedList);

console.log(myLinkedList.push(2));
console.log(myLinkedList.push(4));
console.log(myLinkedList.push(6));
console.log(myLinkedList.push(5));
console.log(myLinkedList.push(9));

console.log(`popping the item`, myLinkedList.pop());

console.log(`inserting item in front`, myLinkedList.unShift(-1));

console.log(`popping item from front`, myLinkedList.shift());

console.log(`getting a value from index`, myLinkedList.get(1));
