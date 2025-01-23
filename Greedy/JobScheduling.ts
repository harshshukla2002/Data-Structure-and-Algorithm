/*
    You are given three arrays: id, deadline, and profit, where each job is associated with an ID, a deadline, and a profit. Each job takes 1 unit of time to complete, and only one job can be scheduled at a time. You will earn the profit associated with a job only if it is completed by its deadline.

    Your task is to find:
    - The maximum number of jobs that can be completed within their deadlines.
    - The total maximum profit earned by completing those jobs.
*/

interface Job {
  id: number;
  deadline: number;
  profit: number;
}

const jobScheduling = (id: number[], deadline: number[], profit: number[]) => {
  const jobs: Job[] = [];

  for (let i = 0; i < id.length; i++) {
    jobs.push({ id: id[i], deadline: deadline[i], profit: profit[i] });
  }

  jobs.sort((a, b) => b.profit - a.profit);

  let maxDeadline = Math.max(...deadline);

  let slots: boolean[] = new Array(maxDeadline + 1).fill(false);

  let totalProfit = 0;
  let jobCount = 0;

  for (let job of jobs) {
    for (let t = job.deadline; t > 0; t--) {
      if (!slots[t]) {
        slots[t] = true;
        totalProfit += job.profit;
        jobCount++;
        break;
      }
    }
  }

  return [jobCount, totalProfit];
};
