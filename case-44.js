// Name:Nickname Generator
// Link:https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript
// Solution:https://www.codewars.com/kata/593b1909e68ff627c9000186/solutions/javascript

function nicknameGenerator(name) {
  if (name.length <= 3) return "Error: Name too short";
  if (["a", "i", "u", "e", "o"].includes(name[2])) return name.slice(0, 4);

  return name.slice(0, 3);
}

console.log(nicknameGenerator("budi"));
console.log(nicknameGenerator("kimber"));
console.log(nicknameGenerator("calana"));
console.log(nicknameGenerator("buudi"));
