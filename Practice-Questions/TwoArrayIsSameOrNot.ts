/*
    given two arrays you need to find both the array are same or not
*/

const isSameArray = (arr1: number[], arr2: number[]): boolean => {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  if (set1.size !== set2.size) return false;

  for (let num of set1) {
    if (!set2.has(num)) return false;
  }

  return true;
};
