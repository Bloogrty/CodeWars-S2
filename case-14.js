// Name: Number of People in the Bus
// Link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

// My logic
// const number = (busStops) => {
//   let stopsIn = 0;
//   let stopsOut = 0;
//   for (let stop of busStops) {
//     stopsIn += stop[0];
//     stopsOut += stop[1];
//   }
//   return stopsIn - stopsOut;
// };

// Solution 2: Using Reduce
function number(busStops) {
  return busStops.reduce((rem, [on, off]) => rem + on - off, 0);
}
