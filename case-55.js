// Name:Dominant array elements
// Link:https://www.codewars.com/kata/5a04133e32b8b998dc000089
// Solution:https://www.codewars.com/kata/5a04133e32b8b998dc000089/solutions/javascript

function solve(arr) {
  let response = [];
  let max = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      response.push(arr[i]);
      max = arr[i];
    }
  }
  return response.reverse();
}

console.log(solve([16, 17, 14, 3, 14, 5, 2]));
