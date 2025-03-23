// Name:Thinkful - Logic Drills: Traffic light
// Link:https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
// Solution:

function updateLight(current) {
  const rules = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };

  return (current = rules[current]);
}
