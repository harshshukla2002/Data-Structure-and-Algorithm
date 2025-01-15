/*
    Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
*/

class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  push(x) {
    this.queue1.push(x);

    while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
    }

    const temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }
  pop() {
    if (this.queue2.length === 0) {
      throw new Error("Stack underflow");
    }
    return this.queue2.shift();
  }
  top() {
    if (this.queue2.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.queue2[0];
  }
  empty() {
    return this.queue2.length === 0;
  }
}
