/*
forEach(): วนลูปทำงานกับสมาชิกในอาร์เรย์แต่ไม่คืนค่า
map(): แปลงสมาชิกในอาร์เรย์และคืนค่าอาร์เรย์ใหม่
filter(): กรองสมาชิกในอาร์เรย์ตามเงื่อนไข
reduce(): สะสมค่าจากสมาชิกในอาร์เรย์และคืนค่าเป็นค่าหนึ่ง
some(): ตรวจสอบว่าอย่างน้อยมีสมาชิกหนึ่งในอาร์เรย์ที่ตรงตามเงื่อนไข
every(): ตรวจสอบว่า ทุก สมาชิกในอาร์เรย์ตรงตามเงื่อนไข
findIndex(): หาดัชนีของสมาชิกตัวแรกที่ตรงตามเงื่อนไข
*/
let fruits = ["Apple", "Banana", "Orange", "Mango"];

fruits.forEach(fruit => { console.log("I love " + fruit); });
//I love Apple , I love Banana ,I love Orange, I love Mango

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);
//["APPLE", "BANANA", "ORANGE", "MANGO"]

let berries = fruits.filter(fruit => fruit.includes("berry"));
console.log(berries);
//["Blueberry"]

let sentence = fruits.reduce((acc, fruit) => acc + " and " + fruit);
console.log(sentence);
//and Apple and Banana and Orange and Mango

let hasMango = fruits.some(fruit => fruit === "Mango");
console.log(hasMango);  // true

let allContainA = fruits.every(fruit => fruit.includes("a"));
console.log(allContainA);  // false

let index = fruits.findIndex(fruit => fruit === "Orange");
console.log(index);  // 2


let people = [
    { name: "John", age: 15 },
    { name: "Sarah", age: 20 },
    { name: "Mike", age: 18 }
];
let averageAge = people.reduce((acc, person, index, array) => {
    acc += person.age;
    if (index === array.length - 1) {
        return acc / array.length;  // คำนวณค่าเฉลี่ยเมื่อถึงสมาชิกสุดท้าย
    }
    return acc;
}, 0);
console.log(averageAge);  // 17.666666666666668
/*  reduce() เริ่มต้นด้วยค่า 0 สำหรับ acc
แต่ละรอบจะสะสมอายุของบุคคลในอาร์เรย์:
รอบแรก: acc = 0 และ person.age = 15 → acc = 15
รอบสอง: acc = 15 และ person.age = 20 → acc = 35
รอบสาม: acc = 35 และ person.age = 18 → acc = 53
เมื่อถึงรอบสุดท้าย (ตัวที่ 3), acc = 53 และเราคำนวณค่าเฉลี่ย
โดยการหาร acc ด้วยจำนวนสมาชิกในอาร์เรย์ (array.length) */