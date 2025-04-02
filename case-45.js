// Name:Counting in the Amazon
// Link:https://www.codewars.com/kata/55b95c76e08bd5eef100001e
// Solution: https://www.codewars.com/kata/55b95c76e08bd5eef100001e/solutions/javascript

function countArara(n) {
  let countAnane = n % 2;
  let countAdak = Math.floor(n / 2);
  // return countAdak;

  return ("adak ".repeat(countAdak) + "anane".repeat(countAnane)).trim();
}

console.log(countArara(11));
