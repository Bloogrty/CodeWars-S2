// Name:Sum without highest and lowest number
// Link:https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
// Solution:https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript

function sumArray(array) {
  if (!array || array.length < 2) return 0;

  let sortArray = array.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < sortArray.length - 1; i++) {
    result += sortArray[i];
  }
  return result;
}

// console.log(sumArray([6, 2, 1, 8, 10]));
