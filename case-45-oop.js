// Name:Counting in the Amazon
// Link:https://www.codewars.com/kata/55b95c76e08bd5eef100001e
// Solution: https://www.codewars.com/kata/55b95c76e08bd5eef100001e/solutions/javascript

class AraraCounter {
  constructor(n) {
    this.countAdak = Math.floor(n / 2);
    this.countAnane = n % 2;
  }

  getAdak() {
    return "adak ".repeat(this.countAdak);
  }

  getAnane() {
    return this.countAnane ? "anane" : "";
  }

  getCount() {
    return (this.getAdak() + this.getAnane()).trim();
  }
}

function countArara(n) {
  return new AraraCounter(n).getCount();
}

console.log(countArara(11));
