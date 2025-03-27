// Name:Remove the minimum
// Link:https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
// Solution:

function removeSmallest(numbers) {
  if (numbers.length === 0) return [];

  let smallest = Math.min(...numbers);

  let index = numbers.indexOf(smallest);

  return numbers.filter((num, i) => i !== index);
}

module.exports = removeSmallest;
