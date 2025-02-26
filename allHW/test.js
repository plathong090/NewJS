//test submit git classroom

/*
    รับค่าตัวเลข 2 ตัว (start และ end) และคำนวณผลรวมของตัวเลขคู่ที่อยู่ในช่วงระหว่างตัวเลข
*/

function sumEvenNumbers(start, end) {
    let sum = 0;

    for (let i = start; i <= end; i++) {
        //เช็คว่าเป็นเลขคู่ โดยหาร 2 ลงตัว
        if (i % 2 === 0 ) {
            sum += i;
        }
    }
    return sum;
}

console.log("The sum of even numbers from 1 to 10 is: " + sumEvenNumbers(1, 10)); //30
console.log("The sum of even numbers from 8 to 20 is: " + sumEvenNumbers(8, 20)); //98