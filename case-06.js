// Name: Opposites Attract
// Link: https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// Solution 1: brute force
// const lovefunc = (flower1, flower2) => {
//   let response = false;
//   let state1 = flower1 % 2;
//   let state2 = flower2 % 2;
//   if (state1 - state2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// };

// Solution 2: Simplify
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(4, 7)); // true (4 is even, 7 is odd)
console.log(lovefunc(2, 6)); // false (both even)
console.log(lovefunc(5, 3)); // false (both odd)
console.log(lovefunc(8, 1)); // true (8 is even, 1 is odd)
