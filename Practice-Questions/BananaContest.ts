/*
    There is a contest of Competitive eating. Rick and Richard were participating in the game.

    N bananas are placed in a line. Rick starts to eat from left to right, and Richard from right to left. For each banana, its length is known.

    Rick eats with speed twice that of Richard. If a player starts to eat the banana, other player can't touch it. If both players reach the same banana simultaneously, Rick gets to eat that banana as he snatches it away from Richard.

    How many bananas each of the players will eat?
*/

const countBanana = (n: number, banana: number[]): number[] => {
  let rick = 0,
    richard = 0;
  let leftTime = 0,
    rightTime = 0;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    if (leftTime <= rightTime) {
      leftTime += banana[left] / 2;
      rick++;
      left++;
    } else {
      rightTime += banana[right];
      rick++;
      right--;
    }
  }

  return [rick, richard];
};
