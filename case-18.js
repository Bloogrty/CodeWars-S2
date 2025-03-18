// Name: Sum of positive
// Link: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// Solution:

function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((acc, cur) => acc + cur, 0);
}
