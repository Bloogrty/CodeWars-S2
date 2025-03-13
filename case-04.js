// Name: Count of positives / sum of negatives
// Link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

const countPositivesSumNegatives = (input) => {
  if (!input || input.length === 0) {
    return [];
  }
  let resultPlus = 0;
  let resultNeg = 0;
  let result = [];

  for (let i of input) {
    // positive count
    if (i > 0) {
      resultPlus += 1;
    }
    // negative sum
    else if (i < 0) {
      resultNeg += i;
    }
  }

  result.push(resultPlus, resultNeg);
  return result;
};
