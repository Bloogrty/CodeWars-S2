// Name:Calculate BMI
// Link:https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
// Solution:https://www.codewars.com/kata/57a429e253ba3381850000fb/solutions/javascript

function bmi(weight, height) {
  const bmi = weight / height ** 2;

  // if (bmi <= 18.5) return "Underweight";
  // if (bmi <= 25) return "Normal";
  // if (bmi <= 30) return "Overweight";
  // return "Obese";

  return bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";
}
