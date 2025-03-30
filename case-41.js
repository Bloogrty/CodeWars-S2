// Name:Password validator
// Link:https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript
// Solution:

function password(str) {
  if (str.length < 8) return false;
  if (!/\d/.test(str)) return false;
  if (!/[A-Z]/.test(str)) return false;
  if (!/[a-z]/.test(str)) return false;
  return true;
}
