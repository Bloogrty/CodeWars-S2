// Name:Not all but sometimes all
// Link:https://www.codewars.com/kata/564ab935de55a747d7000040
// Solution:

function remove(str, what) {
  //code me
  let result = "";

  for (let char of str) {
    if (what[char] && what[char] > 0) {
      what[char]--;
    } else {
      result += char;
    }
  }

  return what;
}

console.log(remove("this is a string", { t: 1, i: 2 }));
