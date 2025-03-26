// Name:Driving School Series #1
// Link:https://www.codewars.com/kata/58999425006ee3f97c00011f/train/javascript
// Solution:https://www.codewars.com/kata/58999425006ee3f97c00011f/solutions/javascript

function passed(list) {
  const listFilter = list.filter((e) => e <= 18);

  if (listFilter.length === 0) return "No pass scores registered.";

  let calculate =
    listFilter.reduce((acc, curr) => acc + curr, 0) / listFilter.length;

  return Math.round(calculate);
}

console.log(passed([10, 10, 10, 18, 20, 20]));
