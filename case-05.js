// Name: Shortest Word
// Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// solution 1: using map.
// const findShort = (s) => {
//   // split sentence to words
//   let words = s.split(" ");

//   // seach minimum
//   // for map, it is creating array.
//   let min = Math.min(...words.map(word => word.length))

//   return min;

//   // return words that have the shortest length
//   // this one is overkill, we just want to know about the min length.
//   // return words.filter(word => word.length === min)
// };

// solution 2: reduce()
// function findShort(sentence) {
//   return sentence
//     .split(" ") // for split into each word
//     .reduce((shortest, current) => //param shortest is first, current will be the second
//       current.length < shortest.length ? current : shortest // if current < length, then current will replace.
//     ).length; // change into number, because the request.
// }

// solution 3: sort()
function findShort(sentence) {
  return sentence.split(" ").sort((a, b) => a.length - b.length)[0].length; //for sorting //getting the first array which is the lowest length //output to int, not the string
}
