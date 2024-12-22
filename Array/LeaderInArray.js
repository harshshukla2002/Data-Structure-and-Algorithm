/*
    You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.
*/

function leadersInArray(arr) {
  let n = arr.length;
  let leaders = [];
  let max = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] >= max) {
      max = arr[i];
      leaders.push(arr[i]);
    }
  }

  return leaders.reverse();
}
