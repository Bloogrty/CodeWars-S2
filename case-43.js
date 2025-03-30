// Name:Initialize my name
// Link:https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript
// Solution:

function initializeNames(name) {
  const nameEach = name.split(" ");

  if (nameEach.length === 1 || nameEach.length === 2) return name;

  const first = nameEach[0]; // get first
  const last = nameEach.slice(-1); // get last
  const middle = nameEach.slice(1, -1).map((e) => e[0] + ".");

  return [first, ...middle, last].join(" ");
}

console.log(initializeNames("budi"));
console.log(initializeNames("budi satria"));
console.log(initializeNames("budi jono joni"));
console.log(initializeNames("budi jono abdul budi joni"));
