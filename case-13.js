// Name: Reverse words
// Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// const reverseWords = (str) => {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// };

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
