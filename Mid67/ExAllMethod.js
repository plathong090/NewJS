
let people = [
    { name: "Beem", age: 25, expense: 120 },
    { name: "Preem", age: 17, expense: 200 },
    { name: "Mike", age: 32, expense: 350 },
    { name: "Bee", age: 28, expense: 150 },
    { name: "Liam", age: 22, expense: 450 }
];

//เพิ่มบุคคลใหม่
people.push({ name: "Pla", age: 19, expense: 600 });
console.log("After push:", people);
/*  After push: [
    { name: 'Beem', age: 25, expense: 120 },
    { name: 'Preem', age: 17, expense: 200 },
    { name: 'Mike', age: 32, expense: 350 },
    { name: 'Bee', age: 28, expense: 150 },
    { name: 'Liam', age: 22, expense: 450 },
    { name: 'Pla', age: 19, expense: 600 }
  ] */

//ลบคนที่อายุต่ำกว่า 18 ปีด้วย `filter()`
people = people.filter(person => person.age >= 18);
console.log("After filter (remove under 18):", people);
/*  After filter (remove under 18): [
  { name: 'Beem', age: 25, expense: 120 },
  { name: 'Mike', age: 32, expense: 350 },
  { name: 'Bee', age: 28, expense: 150 },
  { name: 'Liam', age: 22, expense: 450 },
  { name: 'Pla', age: 19, expense: 600 }
]   */

// หาค่าเฉลี่ยอายุของบุคคลทั้งหมดในอาร์เรย์
let averageAge = people.reduce((acc, person) => acc + person.age, 0) / people.length;
console.log("Average Age:", averageAge);    //Average Age: 25.2

//คำนวณผลรวมของค่าใช้จ่ายทั้งหมดของบุคคลที่มีอายุ 18 ปีขึ้นไป
let totalExpense = people.reduce((acc, person) => acc + person.expense, 0);
console.log("Total Expense:", totalExpense);    //Total Expense: 1670

//หาบุคคลที่ใช้จ่ายมากที่สุด
let highestExpensePerson = people.reduce((max, person) => (person.expense > max.expense ? person : max), people[0]);
console.log("Person with highest expense:", highestExpensePerson);
//Person with highest expense: { name: 'Pla', age: 19, expense: 600 }

//ตรวจสอบว่ามีบุคคลที่ใช้จ่ายเกิน 500 
let hasHighSpender = people.some(person => person.expense > 500);
console.log("Is there anyone who spent more than 500?", hasHighSpender);    //true

//หาบุคคลที่ใช้จ่ายน้อยกว่า 200
let lowSpenders = people.filter(person => person.expense < 200);
console.log("People who spent less than 200:", lowSpenders);
/*  People who spent less than 200: [
  { name: 'Beem', age: 25, expense: 120 },
  { name: 'Bee', age: 28, expense: 150 }
]   */

//หาค่าใช้จ่ายทั้งหมดของบุคคลที่ชื่อ "Mike"
let mikeExpense = people.find(person => person.name === "Mike");
console.log("Mike's expense:", mikeExpense ? mikeExpense.expense : "Mike not found");
//Mike's expense: 350

//ลบคนสุดท้าย
let lastPerson = people.pop();
console.log("After pop (remove last person):", people);
console.log("Removed last person:", lastPerson);
/*  After pop (remove last person): [
  { name: 'Beem', age: 25, expense: 120 },
  { name: 'Mike', age: 32, expense: 350 },
  { name: 'Bee', age: 28, expense: 150 },
  { name: 'Liam', age: 22, expense: 450 }
]  
Removed last person: { name: 'Pla', age: 19, expense: 600 }*/

// 10. ลบบุคคลตัวแรก (ออกจากหน้าของอาร์เรย์) ด้วย `shift()`
let firstPerson = people.shift();
console.log("After shift (remove first person):", people);
console.log("Removed first person:", firstPerson);
/*  After shift (remove first person): [
  { name: 'Mike', age: 32, expense: 350 },
  { name: 'Bee', age: 28, expense: 150 },
  { name: 'Liam', age: 22, expense: 450 }
]
Removed first person: { name: 'Beem', age: 25, expense: 120 } */

// 11. เพิ่มบุคคลใหม่ที่ด้านหน้าด้วย `unshift()`
people.unshift({ name: "David", age: 30, expense: 500 });
console.log("After unshift (add person to front):", people);
/*  After unshift (add person to front): [
  { name: 'David', age: 30, expense: 500 },
  { name: 'Mike', age: 32, expense: 350 },
  { name: 'Bee', age: 28, expense: 150 },
  { name: 'Liam', age: 22, expense: 450 }
]*/

//ใช้ `map()` เพื่อสร้างอาร์เรย์ใหม่ที่เป็นชื่อของบุคคล
let names = people.map(person => person.name);
console.log("Names of all people:", names);
//Names of all people: [ 'David', 'Mike', 'Bee', 'Liam' ]

//ใช้ `every()` เพื่อเช็คว่าทุกคนมีค่าใช้จ่ายมากกว่า 100 หรือไม่
let allSpentMoreThan100 = people.every(person => person.expense > 100);
console.log("Did everyone spend more than 100?", allSpentMoreThan100);  //true

// 14. ใช้ `forEach()` เพื่อลองทำงานบางอย่างกับทุกๆ คนในอาร์เรย์
people.forEach(person => console.log(person.name + " spent " + person.expense));
/*  David spent 500
Mike spent 350
Bee spent 150
Liam spent 450 */

// 15. ใช้ `findIndex()` เพื่อตามหาดัชนีของ "Jessica" ในอาร์เรย์
let jessicaIndex = people.findIndex(person => person.name === "Jessica");
console.log("Index of Jessica:", jessicaIndex);     //-1