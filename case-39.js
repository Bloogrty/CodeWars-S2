// Name:Write Number in Expanded Form
// Link:https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// Solution:

// function expandedForm(num) {
//   let numStr = num.toString();
//   let length = numStr.length;
//   let response = [];

//   for (let i = 0; i < length; i++) {
//     if (numStr[i] !== "0") {
//       response.push(numStr[i] * Math.pow(10, length - i - 1));
//       // response.push(numStr[i] + "0".repeat(length - i - 1));
//     }
//   }

//   return response.join(" + ");
// }

// people work:
// const expandedForm = (n) =>
//   n
//     .toString()
//     .split("")
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter((a) => a > 0)
//     .reverse()
//     .join(" + ");

const expandedForm = (n) => {
  return n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((e) => e > 0);
};

console.log(expandedForm(12));
