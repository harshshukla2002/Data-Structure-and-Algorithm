/*
    You are given a singly linked list representing a non-negative integer where each node contains a single digit. The digits are stored in the same order as they appear in the number. Your task is to add 1 to this number and return the modified linked list.
*/

class ListNode {
  constructor(val: number = 0, next: any = null) {
    this.val = val;
    this.next = next;
  }
}

const addToLinkedList = (head: any) => {
  head = reverse(head);
  let current = head;
  let carry = 1;

  while (current) {
    let sum = current.val + carry;
    current.val = sum % 10;
    carry = Math.floor(sum / 10);

    if (!current.next && carry) {
      current.next = new ListNode(carry);
      carry = 0;
    }

    current = current.next;
  }

  return reverse(head);
};

const reverse = (head: any) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
