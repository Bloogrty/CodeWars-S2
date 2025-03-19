// Name:Total amount of points
// Link:https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
// Solution:

function points(games) {
  let scoreGames = "";
  let teamScore = 0;
  let enemyScore = 0;
  let total = 0;
  for (let game of games) {
    scoreGames = game.split(":");
    teamScore = parseInt(scoreGames[0]);
    enemyScore = parseInt(scoreGames[1]);

    if (teamScore > enemyScore) {
      total = total + 3;
    } else if (teamScore < enemyScore) {
      total = total + 0;
    } else if (teamScore === enemyScore) {
      total = total + 1;
    }
  }

  return total;
}

// Optimized Code
// function points(games) {
//   let total = 0;

//   for (let game of games) {
//     let [teamScore, enemyScore] = game.split(":").map(Number); // Convert directly to numbers

//     total += teamScore > enemyScore ? 3 : teamScore === enemyScore ? 1 : 0; // Use ternary operator
//   }

//   return total;
// }

// TEST CASE
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); // Expected: 30
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
); // Expected: 10
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
); // Expected: 0
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
); // Expected: 15
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
); // Expected: 12
