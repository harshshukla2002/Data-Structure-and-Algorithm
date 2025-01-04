/*
    Given an array of integer arr. Your task is to construct the linked list from arr & return the head of the linked list.
*/

class LinkedList {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

const contructList = (arr) => {
  let head = new LinkedList(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new LinkedList(arr[i]);
    current = current.next;
  }

  return head;
};
