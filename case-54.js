// Name:Regexp Basics - is it all whitespace?
// Link:https://www.codewars.com/kata/567de8823fa5eee02100002a
// Solution:https://www.codewars.com/kata/567de8823fa5eee02100002a/solutions/javascript

String.prototype.whitespace = function () {
  return /^\s*$/.test(this);
};
