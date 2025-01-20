/*
    Given an array arr[] containing positive elements, the task is to find the length of the longest subarray of an input array containing at most two distinct integers.
*/

const longestSubstring = (arr: number[]) => {
  let left: number = 0;
  let maxLength: number = 0;
  let freqMap = new Map();

  for (let right = 0; right < arr.length; right++) {
    freqMap.set(arr[right], (freqMap.get(arr[right]) || 0) + 1);

    while (freqMap.size > 2) {
      freqMap.set(arr[left], freqMap.get(arr[left]) - 1);

      if (freqMap.get(arr[left]) === 0) {
        freqMap.delete(arr[left]);
      }

      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
