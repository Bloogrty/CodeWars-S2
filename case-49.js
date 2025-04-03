// Name:Coding 3min : A*B=C
// Link:https://www.codewars.com/kata/5714803d2817ffce17000a35
// Solution:

// function findAB(numbers, c) {
//   for (let i = 0; i < numbers.length; i++) {
//     let a = numbers[i];
//     // if (a !== 0 && c % a === 0) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       let b = numbers[j];
//       if (a * b === c) {
//         return [a, b];
//       }
//       // }
//     }
//   }
//   return null;
// }

//using set
function findAB(numbers, c) {
  let seen = new Set();

  for (let a of numbers) {
    // Edge case: If c is 0, check if another 0 exists
    if (c === 0 && seen.has(0)) return [0, 0];

    // Avoid division by zero, check if `c / a` exists in the set
    if (a !== 0 && c % a === 0) {
      let b = c / a;
      if (seen.has(b)) {
        return [a, b];
      }
    }

    // Add the number to the set for future lookups
    seen.add(a);
  }
  return null;
}
