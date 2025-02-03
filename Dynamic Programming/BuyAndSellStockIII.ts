/*
    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    Find the maximum profit you can achieve. You may complete at most two transactions.

    Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/

const buyAndSellStock = (prices: number[]): number => {
  let firstBuy: number = Infinity;
  let firstProfit: number = 0;
  let secondBuy: number = Infinity;
  let secondProfit: number = 0;

  for (let price of prices) {
    firstBuy = Math.min(firstBuy, price);
    firstProfit = Math.max(firstProfit, price - firstBuy);
    secondBuy = Math.min(secondBuy, price - firstProfit);
    secondProfit = Math.max(secondProfit, price - secondBuy);
  }

  return secondProfit;
};
