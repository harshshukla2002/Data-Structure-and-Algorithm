/*
    Implement a Queue using an Array. Queries in the Queue are of the following type:
        (i) 1 x   (a query of this type means  pushing 'x' into the queue)
        (ii) 2     (a query of this type means to pop an element from the queue and print the popped    element. If the queue is empty then return -1)

    We just have to implement the functions push and pop and the driver code will handle the output.
*/

class MyQueue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.arr = new Array(100005);
  }

  //Function to push an element x in a queue.
  push(x) {
    // Your code here
    this.arr[this.rear] = x;
    this.rear += 1;
  }

  //Function to pop an element from queue and return that element.
  pop() {
    // Your code here
    if (this.front === this.rear) {
      return -1;
    }
    const poppedElement = this.arr[this.front];
    this.front += 1;
    return poppedElement;
  }
}
