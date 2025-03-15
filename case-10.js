// Name: Are You Playing Banjo?
// Link: https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

// Solution 1
// const areYouPlayingBanjo = (name) => {
//   let startName = name.split("")[0];

//   if (startName === "r" || startName === "R") {
//     return name + " plays banjo";
//   } else {
//     return name + " does not play banjo";
//   }
// };

// Solution 2
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
