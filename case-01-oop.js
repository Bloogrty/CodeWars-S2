class SquareCalculator {
  constructor(numbers) {
    this.numbers = numbers;
  }

  squareSum() {
    let result = 0;

    for (let num of this.numbers) {
      result += num ** 2;
    }

    return result;
  }

  // example only, create a new method
  // normal sum
  sum() {
    return this.numbers.reduce((acc, curr) => acc + curr);
  }
}

const calculator = new SquareCalculator([1, 2, 3, 4]);
console.log(calculator.squareSum()); // Output: 30

// NOTE
// 📌 Recap
// 1️⃣ Classes = Blueprints (e.g., Character, Mage).
// 2️⃣ Objects = Game Characters (hero, villain, wizard).
// 3️⃣ Methods = Actions (attack(), levelUp(), castSpell()).
// 4️⃣ Inheritance = Special Classes (Mage extends Character).

// 🎮 OOP in Gaming = Easy Character Creation & Management
// Instead of writing separate code for every character, we reuse the class.
// Just like how a game spawns multiple enemies from a template!
