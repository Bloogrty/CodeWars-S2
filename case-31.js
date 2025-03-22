// Name:Growth of a Population
// Link:https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
// Solution:https://www.codewars.com/kata/563b662a59afc2b5120000c6/solutions/javascript

function nbYear(p0, percent, aug, p) {
  // your code
  let year = 0;
  let total = 0;
  while (p0 < p) {
    year += 1;
    p0 = parseInt(p0 + (p0 * percent) / 100 + aug);
  }

  return year;
}
