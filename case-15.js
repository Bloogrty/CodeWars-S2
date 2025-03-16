// Name: Two to One
// Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
// Solution: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript

const longest = (s1, s2) => {
  let merge = s1 + s2; //merge string
  let unique = []; //later to define unique char (because only need one, we need to store it in array)

  for (let char of merge) {
    //explore each char
    if (!unique.includes(char)) {
      //check if the unique has data or not
      unique.push(char); //if no data, then push to arrah
    }
  }
  return unique.sort().join(""); //because need response in ascend and string, use sort and then join because at first unique is array.
};
