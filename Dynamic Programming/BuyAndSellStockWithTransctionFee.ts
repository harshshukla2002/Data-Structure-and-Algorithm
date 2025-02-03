/*
    You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

    Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

    Note:

    - You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
    - The transaction fee is only charged once for each stock purchase and sale.
*/

const maxProfit = (prices: number[], fee: number): number => {
  let hold: number = -Infinity;
  let cash: number = 0;

  for (let price of prices) {
    let prevCash: number = cash;
    cash = Math.max(cash, hold + price - fee);
    hold = Math.max(hold, prevCash - price);
  }

  return cash;
};
