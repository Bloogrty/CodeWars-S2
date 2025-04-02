// Name:Sort by binary ones
// Link:https://www.codewars.com/kata/59eb28fb0a2bffafbb0000d6
// Solution:

function sortByBinaryOnes(list) {
  // let binary = parseInt(list.toString(4));
  // let binary = list.toString(2);
  // let binary = parseInt(list).toString(2);

  // convert each to binary
  let binaryMap = list.map((e) => e.toString(2));

  let sortBinary = list
    .map((e, i) => ({
      value: e, //original number
      count: binaryMap[i].split("1").length - 1, //count 1 int binary
    }))
    .sort((a, b) => b.count - a.count || a.value - b.value) //sort number 1 descending
    .map((e) => e.value); //extract sorted numbers

  return sortBinary;
}

console.log(sortByBinaryOnes([1, 4, 2, 9]));
console.log(sortByBinaryOnes([2, 3]));
console.log(sortByBinaryOnes([3.4]));
console.log(sortByBinaryOnes([90, 87]));
