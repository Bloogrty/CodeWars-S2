// Name: Highest and Lowest
// Link: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

const highAndLow = (numbers) => {
  const number = numbers.split(" ");
  const highNumber = Math.max(...number);
  const lowNumber = Math.min(...number);
  // return `${highNumber} ${lowNumber}`;
  return [highNumber, lowNumber].join(" ");
};
