// Name:The Hidden Word
// Link:https://www.codewars.com/kata/5906a218dfeb0dbb52000005/train/javascript
// Solution:https://www.codewars.com/kata/5906a218dfeb0dbb52000005/solutions/javascript

function hiddenWord(num) {
  const rules = {
    6: "a",
    1: "b",
    7: "d",
    4: "e",
    3: "i",
    2: "l",
    9: "m",
    8: "n",
    0: "o",
    5: "t",
  };

  return num
    .toString()
    .split("")
    .map((e) => rules[e])
    .join("");
}
