// Name: Century From Year
// Link:https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
// Solution:https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript

function century(year) {
  // Finish this :)
  if (year <= 100) {
    return 1;
  }

  let number = year % 100;
  let centuryString = year.toString();
  let century =
    centuryString.length > 2
      ? parseInt(centuryString.substring(0, centuryString.length - 2))
      : 0;
  console.log(century);

  if (number > 0) {
    return century + 1;
  }
  return century;
}

console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(2000)); // 20
console.log(century(2742)); // 28
