// Name:Odd or Even?
// Link:https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript
// Solution:https://www.codewars.com/kata/5949481f86420f59480000e7/solutions/javascript

function oddOrEven(array) {
  if (array === null) return "even";

  let total = array.reduce((acc, curr) => acc + curr, 0);

  if (total % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
