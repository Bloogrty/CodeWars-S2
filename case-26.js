// Name:Complementary DNA
// Link:https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// Solution:

function dnaStrand(dna) {
  // a = t
  // c = g

  // mapping rules
  const rules = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna
    .split("")
    .map((e) => rules[e])
    .join("");
}
