// Name: You're a square!
// Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
// Solution:https://www.codewars.com/kata/54c27a33fb7da0db0100040e/solutions/javascript

// my logic:
// Check with the square root.
// If the number is a perfect square, return true.
// var isSquare = function (n) {
//   let result = n  ** 0.5;
//   return Number.isInteger(result);
// };

// Use math
const isSquare = (number) => {
  if (number < 0) return false;
  return Number.isInteger(Math.sqrt(number));
};
