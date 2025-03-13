// Name: Counting sheep...
// Link: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

// solution 1
const countSheeps = (sheeps) => {
  let result = 0;
  for (let sheep of sheeps) {
    if (sheep === true) {
      result += 1;
    }
  }
  return result;
};

// solution 2
function countSheeps(sheep) {
  return sheep.filter((s) => s === true);
}
