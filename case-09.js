// Name: Beginner - Lost Without a Map
// Link: //www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

// Solution 1: Using Loop
// const maps = (x) => {
//   let result = [];
//   for (let i of x) {
//     result.push(i*2);
//   }

//   return result;
// }

// Solution 2
function maps(numbers) {
  return numbers.map((number) => number * 2);
}
