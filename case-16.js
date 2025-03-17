// Name: Basic Mathematical Operations
// Link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// Solution: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions/javascript

const basicOp = (operation, value1, value2) => {
  let calculate = 0;
  switch (operation) {
    case "+":
      calculate = value1 + value2;
      return calculate;

    case "-":
      calculate = value1 - value2;
      return calculate;

    case "*":
      calculate = value1 * value2;
      return calculate;

    case "/":
      calculate = value1 / value2;
      return calculate;
  }
};
