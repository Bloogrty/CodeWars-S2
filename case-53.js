// Name:Is this a triangle?
// Link:https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
// Solution:

function isTriangle(a, b, c) {
  if ((a, b, c <= 0)) return false;
  return a + b > c && b + c > a && a + c > b;
}

console.log(isTriangle(1, 2, 1));
