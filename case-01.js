// Name: Square(n) Sum
// Link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

const squareSum = (number) => {
  let result = 0;
  for (let num of number) {
    result += num ** 2;
  }

  return result;
};
