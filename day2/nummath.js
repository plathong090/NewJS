let num1 = 100;

const calculations = [
  "****** Basic ******\n",
  num1 + 25,
  num1 - 100,
  num1 * 100,
  num1 / 1500,
  "\n****** Additional Mathematical Operations ******\n",
  num1 % 1500,
  ++num1,
  --num1,
  "\n****** Using the math object ******\n",
  Math.PI,
  Math.sqrt(num1), //sqare root
];

calculations.forEach(result => console.log(result));
