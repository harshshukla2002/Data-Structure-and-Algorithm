/*
    You are given a queue of people arriving at a housewarming party, each carrying a gift represented by a character in a string. Your task is to process this queue one person at a time and determine the first unique gift at that moment. If no gift is unique, append # to the result.
*/

const uniqueGifts = (gifts: string): string => {
  let queue: string[] = [];
  let result: string = "";
  let freq = new Map();

  for (let gift of gifts) {
    freq.set(gift, (freq.get(gift) || 0) + 1);

    if (freq.get(gift) === 1) queue.push(gift);

    while (queue.length > 0 && freq.get(queue[0]) > 1) {
      queue.shift();
    }

    result += queue.length > 0 ? queue[0] : "#";
  }

  return result;
};
