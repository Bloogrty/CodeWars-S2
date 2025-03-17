// Name: Rock Paper Scissors!
// Link: https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
// Solution: https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions/javascript

// // Solution 1: create rules (object)
// const rps = (p1, p2) => {
//   // create Object
//   const rules = {
//     rock: "scissors",
//     scissors: "paper",
//     paper: "rock",
//   };

// if (p1 === p2) return "Draw!";
// return rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!"
// };

// Solution 2: using array (check player 2)
// function rps(player1, player2) {
//   const hands = ["rock", "paper", "scissors"];
//   const p1 = hands.indexOf(player1);
//   const p2 = hands.indexOf(player2);

//   if (p1 === p2) return "Draw!";

//   return (p1 + 1) % 3 === p2 ? "Player 2 won!" : "Player 1 won!";
// }

// Check player 1
function rps(player1, player2) {
  const hands = ["rock", "paper", "scissors"];
  const p1 = hands.indexOf(player1);
  const p2 = hands.indexOf(player2);

  if (p1 === p2) return "Draw!";

  return (p1 + 2) % 3 === p2 ? "Player 1 won!" : "Player 2 won!";
}
