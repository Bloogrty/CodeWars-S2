// Name:Holiday II - Plane Seating
// Link:https://www.codewars.com/kata/57e8f757085f7c7d6300009a/train/javascript
// Solution: www.codewars.com/kata/57e8f757085f7c7d6300009a/solutions/javascript

https: function planeSeat(a) {
  const number = parseInt(a.match(/\d+/)[0], 10);
  const alphabet = a.match(/[a-zA-Z]+/)[0];

  let seat; // for number
  let position; // for alphabet

  if (number >= 1 && number <= 20) seat = "Front";
  if (number >= 21 && number <= 40) seat = "Middle";
  if (number >= 41 && number <= 60) seat = "Back";

  if (["A", "B", "C"].includes(alphabet)) position = "Left";
  if (["D", "E", "F"].includes(alphabet)) position = "Middle";
  if (["G", "H", "K"].includes(alphabet)) position = "Right";

  return seat && position ? seat + "-" + position : "No Seat!!";
}
