// Name:Sum Mixed Array
// Link:https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
// Solution:

function sumMix(x) {
  return x
    .map((num) => parseInt(num, 10)) //10 is to convert string to integer (base 10)
    .reduce((acc, curr) => acc + curr, 0);
}
