// Name:Unflatten a list (Easy)
// Link:https://www.codewars.com/kata/57e2dd0bec7d247e5600013a/train/javascript
// Solution:

function unflatten(flatArray) {
  const result = [];
  let index = 0;

  while (index < flatArray.length) {
    if (flatArray[index] < 3) {
      result.push(flatArray[index]);
      index++;
    } else {
      let subArray = flatArray.slice(index, index + flatArray[index]);
      result.push(subArray);
      index += flatArray[index];
    }
  }

  return result;
}

console.log(unflatten([1, 4, 5, 2, 3, 1, 2, 2, 6, 3]));
