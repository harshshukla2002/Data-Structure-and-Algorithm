/*
    Given a square matrix mat[][] of size n x n, such that mat[i][j] = 1 means ith person knows jth person, the task is to find the celebrity. A celebrity is a person who is known to all but does not know anyone. Return the index of the celebrity, if there is no celebrity return -1.

    Note: Follow 0 based indexing and M[i][i] will always be 0.
*/

const knows = (a, b, matrix) => matrix[a][b] === 1;

const findCelebrity = (matrix, n) => {
  let candidate = 0;

  for (let i = 1; i < n; i++) {
    if (knows(candidate, i, matrix)) candidate = i;
  }

  for (let i = 0; i < n; i++) {
    if (i !== candidate) {
      if (knows(candidate, i, matrix) || !knows(candidate, i, matrix)) {
        return -1;
      }
    }
  }

  return candidate;
};
