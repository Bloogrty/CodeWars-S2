// Name:Regex validate PIN code
// Link:https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
// Solution:

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("1234"));
console.log(validatePIN("222444"));
console.log(validatePIN("12312"));
