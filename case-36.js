// Name:Who likes it?
// Link:https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// Solution:https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript

function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length >= 4)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likes(["Peter"]));
