let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// หาเลขที่เป็นเลขคู่
arr.forEach(num => {
  if (num % 2 === 0) console.log(num + "\n");  // Output: 2 4 6 8
});

// เพิ่ม 2 ให้กับทุกตัวเลข
let newArr = arr.map(num => num + 2);
console.log(newArr + "\n");  // Output: [3, 4, 5, 6, 7, 8, 9, 10, 11]

// หาผลรวมของตัวเลขทั้งหมด
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum + "\n");  // Output: 45

// ตรวจสอบว่าอาร์เรย์มีเลขคู่หรือไม่
let hasEven = arr.some(num => num % 2 === 0);
console.log(hasEven + "\n");  // Output: true

// ตรวจสอบว่าอาร์เรย์ทั้งหมดเป็นเลขคู่หรือไม่
let allEven = arr.every(num => num % 2 === 0);
console.log(allEven + "\n");  // Output: false

// หาตำแหน่งของเลข 5
let index = arr.findIndex(num => num === 5);
console.log(index + "\n");  // Output: 4

// ใช้ filter() เพื่อหาค่าเลขคู่
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers + "\n");  // Output: [2, 4, 6, 8]

let people = [
    { name: 'John', age: 16 },
    { name: 'Sarah', age: 20 },
    { name: 'Mike', age: 25 },
    { name: 'Anna', age: 17 }
];
// ใช้ filter() เพื่อหาคนที่มีอายุ 18 ปีขึ้นไป
let adults = people.filter(person => person.age >= 18);
console.log(adults + "\n");
// Output: [{ name: 'Sarah', age: 20 }, { name: 'Mike', age: 25 }]
