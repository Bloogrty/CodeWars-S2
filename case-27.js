// Name:Sum of two lowest positive integers
// Link:https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
// Solution:

function sumTwoSmallestNumbers(numbers) {
  // Code here
  let [numbers1, numbers2] = numbers.sort((a, b) => a - b);
  return numbers1 + numbers2;
}

// TEST CASE
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); // Expected output: 7 (2 + 5)
console.log(sumTwoSmallestNumbers([10, 343, 1, 55, 9])); // Expected output: 10 (1 + 9)
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // Expected output: 10 (3 + 7)
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // Expected output: 24 (1 + 23)
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // Expected output: 16 (4 + 12)
