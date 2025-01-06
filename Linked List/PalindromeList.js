/*
    Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
*/

function isPalindrome(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = reverseList(slow);

  let first = head;
  let temp = second;

  while (temp) {
    if (first.val !== temp.val) {
      return false;
    }

    first = first.next;
    temp = temp.next;
  }

  reverseList(second);

  return true;
}

function reverseList(head) {
  let prev = null;

  while (head) {
    let next = head.next;

    head.next = prev;
    prev = head;

    head = next;
  }

  return prev;
}
