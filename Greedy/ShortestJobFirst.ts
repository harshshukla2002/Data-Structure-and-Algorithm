/*
    Geek is a software engineer. He is assigned with the task of calculating average waiting time of all the processes by following shortest job first policy.

    The shortest job first (SJF) or shortest job next, is a scheduling policy that selects the waiting process with the smallest execution time to execute next.

    Given an array of integers bt of size n. Array bt denotes the burst time of each process. Calculate the average waiting time of all the processes and return the nearest integer which is smaller or equal to the output.

    Note: Consider all process are available at time 0.
*/

const shortestJobFirst = (bt: number[]): number => {
  bt.sort((a, b) => a - b);

  let n: number = bt.length;
  let waitingTime: number = 0;
  let currentTime: number = 0;

  for (let i = 0; i < n; i++) {
    waitingTime += currentTime;
    currentTime += bt[i];
  }

  let average: number = Math.floor(waitingTime / n);

  return average;
};
