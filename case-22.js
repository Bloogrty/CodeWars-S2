// Name:Isograms
// Link:https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
// Solution:

// solution 1: loop and includes
// function isIsogram(str) {
//   let check = true;
//   let strArr = str.toLowerCase().split("");
//   let arr = [];

//   for (let char of strArr) {
//     if (!arr.includes(char)) {
//       arr.push(char);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// solution 2: set
function isIsogram(str) {
  //...
  str = str.toLowerCase();
  let charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) return false;
    charSet.add(char);
  }

  return true;
}

// Test cases
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("hello")); // false
console.log(isIsogram("")); // true
console.log(isIsogram("a")); // true
console.log(isIsogram("Z")); // true
console.log(isIsogram("BlueSky")); // true
console.log(isIsogram("abcdefghijklmNOPQRSTUVWXYZ")); // true
