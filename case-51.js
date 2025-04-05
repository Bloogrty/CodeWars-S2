// Name: Jaden Casing Strings
// Link:https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// Solution:https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript

//this one is prototype method
Object.defineProperty(String.prototype, "toJadenCase", {
  value: function toJadenCase() {
    return this.split(" ")
      .map(
        (e) =>
          e[0].toUpperCase() + //make to upper case
          e.slice(1)
      ) // continue until rest of word
      .join(" ");
  },
});
