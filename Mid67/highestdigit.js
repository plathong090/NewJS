function highestDigit(num) {
    const digits = num.toString().split(''); // แปลงตัวเลขให้เป็นสตริง แล้วแบ่งออกเป็นอาร์เรย์ของตัวอักษรแต่ละตัว
    const numbers = digits.map(Number); // แปลงอาร์เรย์ของตัวอักษร กลับเป็นอาร์เรย์ของตัวเลข
    return Math.max(...numbers); //หาค่าสูงสุดในอาร์เรย์ numbers แล้ว return ค่า
  }
console.log(highestDigit(379)); // ผลลัพธ์: 9
console.log(highestDigit(2));   // ผลลัพธ์: 2
console.log(highestDigit(377401)); // ผลลัพธ์: 7