// Name:Abbreviate a Two Word Name
// Link:https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// Solution:https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript

function abbrevName(name) {
  let splitName = name.split(" ");
  let firstName = splitName[0][0].toUpperCase();
  let lastName = splitName[1][0].toUpperCase();
  return `${firstName}.${lastName}`;
}

console.log(abbrevName("Budi Anjay"));
